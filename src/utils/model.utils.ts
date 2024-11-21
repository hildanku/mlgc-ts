import * as tf from '@tensorflow/tfjs-node';
import { config } from '../config';

export const loadModel: () => Promise<tf.GraphModel> = async () => {
        
        const modelPath: any = config.modelPath;
        const model = await tf.loadGraphModel(modelPath);
        
        console.log(`model loaded`, modelPath);
        
        return model;
}
// loadModel()