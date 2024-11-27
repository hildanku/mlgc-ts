import axios from 'axios';
import { useState } from 'react';
import { PredictionResponse } from '../types/api';

const API_URL = 'http://localhost:5000'; // Replace with your actual API URL

export const usePredictImage = () => {
  const [data, setData] = useState<PredictionResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const predict = async (file: File) => {
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post<PredictionResponse>(`${API_URL}/predict`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setData(response.data);
    } catch (err) {
      setError('An error occurred while predicting the image. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { predict, data, isLoading, error };
};

