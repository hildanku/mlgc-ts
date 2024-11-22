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
export interface PredictionData {
  id: string;
  result: string;
  createdAt: string;
  suggestion: string;
}