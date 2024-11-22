import express from 'express';
import { loadModel } from './utils/model.util';
import handleMulterError from './middlewares/multer.middleware';
import { config } from './config';
import cors from 'cors';
import router from './routes';

const app = express();
const port = config.port;

app.use(cors());

  (async () => {
    try {
      (global as any).model = await loadModel();
      console.log('Model sukses di load');
    } catch (error) {
      console.error('Gagal load model:', error);
    }
  })();

app.use(router);
app.use(handleMulterError);

app.listen(port, () => {
    console.log(`run on ${port}`)
});