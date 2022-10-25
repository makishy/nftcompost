import { db } from '../lib/firebase'
import { doc, getDoc } from 'firebase/firestore'

export const getAddressValue = async (address: string, key: string): Promise<string | number | undefined> => {
  const docRef = doc(db, 'addresses', address)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return docSnap.get(key)
  } else {
    return
  }
}