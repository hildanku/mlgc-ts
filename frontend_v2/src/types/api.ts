export interface PredictionResponse {
    status: 'success';
    message: string;
    data: {
      id: string;
      result: string;
      suggestion: string;
      createdAt: string;
    };
  }
  
  