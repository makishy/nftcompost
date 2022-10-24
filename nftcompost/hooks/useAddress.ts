import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../lib/firebase'

export const useAddress = (address?: string) => {
  const [deviceId, setDeviceId] = useState<string>()

  useEffect(() => {
    const f = async () => {
      if (address) {
        const docRef = doc(db, 'addresses', address)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          const deviceId = docSnap.get('deviceId')
          setDeviceId(deviceId)
        } else {
          console.log('no data')
        }
      }
    }
    f()
  }, [address])
  return { deviceId }
}
