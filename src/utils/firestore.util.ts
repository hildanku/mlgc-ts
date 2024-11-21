import { Firestore } from "@google-cloud/firestore";
import { config } from "../config";

export const db = new Firestore({
    projectId: config.projectId
});