import * as tf from '@tensorflow/tfjs-node';

export const preprocessImage = (image: Buffer): tf.Tensor => {
  return tf.node
    .decodeJpeg(image)
    .resizeNearestNeighbor([224, 224])
    .expandDims()
    .toFloat();
};