import { type Request, type Response } from 'express';

export const healthcheck = (req: Request, res: Response): void => {
  res.send('API is running!');
};