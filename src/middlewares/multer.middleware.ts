import { type Request, type Response, type NextFunction } from 'express';
import { MulterError } from 'multer';

const handleMulterError = (err: MulterError, req: Request, res: Response, next: NextFunction): void => {
    if (err instanceof MulterError) {
      
        if (err.code === 'LIMIT_FILE_SIZE') {
            res.status(413).json({
                status: 'fail',
                message: 'Payload content length greater than maximum allowed: 1000000' 
            });
        }

        res.status(400).json({ error: err.message });
    }
    next(err);
};

export default handleMulterError;