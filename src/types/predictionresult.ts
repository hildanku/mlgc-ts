export interface PredictionResult {
  status: string;
  message: string;
  data: {
    id: string | null;
    result: string;
    suggestion: string;
    createdAt: string | null;
  }
}