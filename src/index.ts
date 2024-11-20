import express, { type Request, type Response } from 'express';

const app = express();
const port = import.meta.env.PORT || 3000;

app.get('/healthcheck', (req: Request, res: Response) => {
    res.send('Typescript')
});

app.listen(port, () => {
    console.log(`run on ${port}`)
});