import { db } from '../lib/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'

export const getAddressValue = async (address: string, key: string): Promise<string | number | undefined> => {
  const docRef = doc(db, 'addresses', address)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return docSnap.get(key)
  } else {
    return
  }
}

export const consumePoint = async (address: string, point: number) => {
  const docRef = doc(db, 'addresses', address)
  const docSnap = await getDoc(docRef)
  if (!docSnap.exists()) {
    return
  } else {
    const currentPoint = docSnap.get('point')
    const newPoint = currentPoint - point
    const newData = { point: newPoint }
    await updateDoc(docRef, newData)
  }
}

export const requestToken = async (amountOfRequestTokens: number, address: string) => {
  // decrease remain tokens
  const docTokenRef = doc(db, 'tokens', 'supply')
  const tokenSnap = await getDoc(docTokenRef)
  const tokenData = tokenSnap.data()
  const totalRemain = tokenData?.remain
  const newTotalRemain = totalRemain - amountOfRequestTokens
  await updateDoc(docTokenRef, { remain: newTotalRemain })
  //increase own token
  const docAddressRef = doc(db, 'addresses', address)
  const addressSnap = await getDoc(docAddressRef)
  const addressData = addressSnap.data()
  const ownToken = addressData?.token ?? 0
  // const deviceId = addressData?.deviceId
  const newData = { token: ownToken + amountOfRequestTokens }
  await updateDoc(docAddressRef, newData)


}