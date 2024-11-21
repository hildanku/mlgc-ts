import * as tf from '@tensorflow/tfjs-node';
import type { PredictionResult } from '../types/predictions.type';
import { preprocessImage } from './preprocess.service';
import { labelSuggestion } from './labeling.service';
import { v4 as uuidv4 } from 'uuid';

// Main prediction function
export const predictClassification = async (
  model: tf.GraphModel,
  image: Buffer
): Promise<PredictionResult> => {
  try {

    const id = uuidv4();
    const createdAt = new Date().toISOString();

    const tensor = preprocessImage(image);

    const prediction = model.predict(tensor) as tf.Tensor;
    const score = await prediction.data();
    const confidenceScore = score[0];

    const { label, suggestion } = labelSuggestion(confidenceScore);

    // return { id, label, suggestion, createdAt };
    const predictResult = {
      status: 'success',
      message: 'Model is predicted successfully',
      data: {
        id,
        result: label,
        suggestion: suggestion,
        createdAt,
      },
    }
    
    return predictResult;
  } catch (error: any) {
    throw new Error(`Terjadi kesalahan dalam melakukan prediksi: ${error.message}`);
  }
};
