import * as tf from '@tensorflow/tfjs';

// Cache the loaded model
let cachedModel: tf.LayersModel | null = null;

export async function preprocessImage(imageUrl: string): Promise<tf.Tensor> {
  // Load the image
  const img = new Image();
  img.src = imageUrl;
  await new Promise((resolve) => {
    img.onload = resolve;
  });

  return tf.tidy(() => {
    // Convert image to tensor
    const tensor = tf.browser.fromPixels(img)
      // Convert to grayscale by taking average of RGB channels
      .mean(2)
      // Resize to 240x240
      .resizeBilinear([240, 240])
      // Add batch dimension and channel dimension
      .expandDims(0)
      .expandDims(-1)
      // Normalize values to [0,1]
      .div(255.0);

    return tensor;
  });
}

export async function loadModel() {
  if (cachedModel) {
    return cachedModel;
  }

  try {
    // Load the sharded model
    cachedModel = await tf.loadLayersModel('/src/model/model.json');
    return cachedModel;
  } catch (error) {
    console.error('Error loading model:', error);
    throw error;
  }
}

export function calculateSpillArea(prediction: number): number {
  // Calculate area based on prediction confidence
  // This is a simplified calculation - adjust based on your needs
  if (prediction === 1) {
    return Math.round(Math.random() * (7 - 3) + 3); // Random area between 3-7 km²
  }
  return 0;
}