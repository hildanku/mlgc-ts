import { type Request, type Response, type NextFunction } from 'express';
import { MulterError } from 'multer';

const handleMulterError = (err: MulterError, req: Request, res: Response, next: NextFunction): any => {
    if (err instanceof MulterError) {
      
        if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(413).json({
                status: 'fail',
                message: 'Payload content length greater than maximum allowed: 1000000' 
            });
        }

        return res.status(400).json({ error: err.message });
    }
    next(err);
};

export default handleMulterError;