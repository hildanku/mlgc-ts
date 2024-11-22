import type { PredictionData, PredictionHistory } from "../types/predictions.type";
import { db } from "../utils/firestore.util";

export function storePrediction(id: any, data: PredictionData): Promise<any> {
    const docRef = db.collection('predictions').doc(id);
    return docRef.set(data);
}

export const getPredictionHistory = async (): Promise<PredictionHistory> => {
    
    const snapshot = await db.collection('predictions').get();
    
    const data = snapshot.docs.map((doc) => {
        const docData = doc.data();
        return {
          id: doc.id,
          history: {
            id: doc.id,
            result: docData.result,
            suggestion: docData.suggestion,
            createdAt: docData.createdAt
          },
        };
      });
    
      return {
        status: 'success',
        data,
      };
}