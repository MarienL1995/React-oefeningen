import "firebase/firestore";
import {firestoreDatabase} from "./firestore";
export async function getCollection(name) {
    const COLLECTION = name;
    if (!firestoreDatabase) return [];
    const result = await firestoreDatabase.collection(COLLECTION).get();
    if (result.empty) return [];
    return result.docs.map(doc => ({...doc.data(), id: doc.id}));
}