import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-full bg-gray-100">
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle>Welcome to Asclepius</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This application demonstrates consuming a TypeScript API using React. Navigate to the Predict page to interact with the API.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;

