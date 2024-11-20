import * as tf from '@tensorflow/tfjs-node';

export const loadModel: () => Promise<tf.GraphModel> = async () => {
        
        const modelPath: string = 'file:///home/x/Documents/mlgc-ts/model/model.json';
        const model = await tf.loadGraphModel(modelPath);
        
        console.log(`model loaded`, modelPath);
        
        return model;
}
// loadModel()