import * as tf from '@tensorflow/tfjs-node';
import type { PredictionResult } from '../types/predictionresult';
import { preprocessImage } from './preprocess.controller';
import { labelSuggestion } from './labeling.controller';

// Main prediction function
export const predictClassification = async (
  model: tf.GraphModel,
  image: Buffer
): Promise<PredictionResult> => {
  try {
    const tensor = preprocessImage(image);

    const prediction = model.predict(tensor) as tf.Tensor;
    const score = await prediction.data();
    const confidenceScore = score[0];

    const { label, suggestion } = labelSuggestion(confidenceScore);

    return { label, suggestion };
  } catch (error: any) {
    throw new Error(`Terjadi kesalahan dalam melakukan prediksi: ${error.message}`);
  }
};
