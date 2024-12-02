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
    <div className="min-h-screen flex items-start justify-center bg-gray-100 pt-10">
      <div className="container mx-auto px-4 top-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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
            </CardContent>
          </Card>
          <Card>
            <Card>
              <CardHeader>
                <CardTitle>Prediction Result</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading && <p>Processing image...</p>}

                {error && (
                  <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {data && (
                  <div className="space-y-2">
                    <p><strong>ID:</strong> {data.data.id}</p>
                    <p><strong>Result:</strong> {data.data.result}</p>
                    <p><strong>Suggestion:</strong> {data.data.suggestion}</p>
                    <p><strong>Created At:</strong> {new Date(data.data.createdAt).toLocaleString()}</p>
                  </div>
                )}

                {!isLoading && !error && !data && (
                  <p className="text-gray-500">No prediction results yet. Upload an image and click 'Predict' to get started.</p>
                )}
              </CardContent>
            </Card>

          </Card>
        </div>
      </div>
    </div>
  );
};

export default PredictPage;
