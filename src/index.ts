import express, { type Request, type Response } from 'express';
import multer from 'multer';
import { predictClassification } from './controllers/predictions.controller';
import * as tf from '@tensorflow/tfjs-node';
import { loadModel } from './utils/model.utils';
import handleMulterError from './middlewares/multer.middleware';
import { config } from './config';
import cors from 'cors';

const app = express();
const port = config.port;

app.use(cors());

  const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 1000000 },
  });

  let model: tf.GraphModel;

  const initializeModel = async () => {
      try {
          model = await loadModel();
          console.log('Model sukses di load');
      } catch (error) {
          console.error('Gagal load model:', error);
      }
  };
  
  initializeModel();

app.get('/healthcheck', (req: Request, res: Response) => {
    res.send('API is running!')
});

// Typescript no overload matches this call
// solving: https://stackoverflow.com/questions/70964519/typescript-no-overload-matches-this-call
// remember to use Promise<any>
app.post('/predict', upload.single('image'), async (req: Request, res: Response): Promise<any> => {
    if (!req.file) {
      return res.status(400).json({ message: 'Tidak ada gambar yang di upload!' });
    }
  
    try {
      const imageBuffer = req.file.buffer;
      const predictionResult = await predictClassification(model, imageBuffer);
  
      return res.status(201).json(predictionResult);
    } catch (error) {
      console.error('Prediksi gagal:', error);
      return res.status(400).json({
        status: "fail",
        message: "Terjadi kesalahan dalam melakukan prediksi"
      });
    }
});

app.get('/predict/histories', (req: Request, res: Response) => {
    res.send('predict history endpoint')
});

app.use(handleMulterError);

app.listen(port, () => {
    console.log(`run on ${port}`)
});