import dotenv from 'dotenv';
import { env } from 'process';

dotenv.config();

export const config = {
    port: env.PORT || 3000,
    modelPath: env.MODEL_PATH,
    projectId: env.PROJECT_ID
};