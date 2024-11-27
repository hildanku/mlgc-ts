import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Welcome to API Consumer</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This application demonstrates consuming a TypeScript API using React. Navigate to the Predict page to interact with the API.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;

