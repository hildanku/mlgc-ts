import type { PredictionData } from "../types/predictions.type";
import { db } from "../utils/firestore.util";

export function storePrediction(id: any, data: PredictionData): Promise<any> {
    const docRef = db.collection('predictions').doc(id);
    return docRef.set(data);
}