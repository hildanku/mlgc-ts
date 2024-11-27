import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { usePredictImage } from '@/hooks/use-predict-image';
import { useState } from 'react';

const PredictPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const { predict, data, isLoading, error } = usePredictImage();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file) {
      await predict(file);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Predict Image</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="file" onChange={handleFileChange} accept="image/*" />
            <Button type="submit" disabled={!file || isLoading}>
              {isLoading ? 'Predicting...' : 'Predict'}
            </Button>
          </form>

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {data && (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Prediction Result</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>ID:</strong> {data.data.id}</p>
                <p><strong>Result:</strong> {data.data.result}</p>
                <p><strong>Suggestion:</strong> {data.data.suggestion}</p>
                <p><strong>Created At:</strong> {new Date(data.data.createdAt).toLocaleString()}</p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictPage;
