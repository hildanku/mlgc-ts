import { Router } from 'express';
import { healthcheck } from '../controllers/healthcheck.controller';
import multer from 'multer';
import { getPredictionHistories, predict } from '../controllers/predict.controller';

const router = Router();
// Multer setup
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 1000000 },
  });
  
router.get('/healthcheck', healthcheck);
router.post('/predict', upload.single('image'), predict);
router.get('/predict/histories', getPredictionHistories);

export default router;
