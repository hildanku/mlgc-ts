import { type Request, type Response } from 'express';
import { predictClassification } from '../services/predictions.service';
import { getPredictionHistory } from '../services/firestore.service';

// Typescript no overload matches this call
// solving: https://stackoverflow.com/questions/70964519/typescript-no-overload-matches-this-call
// remember to use Promise<any>
export const predict = async (req: Request, res: Response): Promise<any> => {
  if (!req.file) {
    return res.status(400).json({ message: 'Tidak ada gambar yang di upload!' });
  }

  try {
    const imageBuffer = req.file.buffer;
    const predictionResult = await predictClassification((global as any).model, imageBuffer);

    return res.status(201).json(predictionResult);
  } catch (error) {
    console.error('Prediksi gagal:', error);
    return res.status(400).json({
      status: 'fail',
      message: 'Terjadi kesalahan dalam melakukan prediksi',
    });
  }
};

export const getPredictionHistories = async (req: Request, res: Response): Promise<any> => {
  try {
    const data = await getPredictionHistory();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Gagal mendapatkan riwayat prediksi:', error);
    return res.status(500).json({
      status: 'fail',
      message: 'Gagal mendapatkan data riwayat prediksi',
    });
  }
};
