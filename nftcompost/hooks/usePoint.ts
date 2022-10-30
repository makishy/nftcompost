import { useAddress } from '@thirdweb-dev/react'
import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import { useCallback, useEffect, useState } from 'react'
import { db } from '../lib/firebase'
import { addAddress, consumePoint, getAddressValue } from '../services/FirestoreService'

export const usePoint = () => {
  const address = useAddress()
  const [point, setPoint] = useState<number>(0)
  useEffect(() => {
    const f = async () => {
      if (address) {
        const ret = await getAddressValue(address, 'point') as number
        if (ret) {
          setPoint(ret)
        } else {
          console.log('no data')
        }
      }
    }
    f()
  }, [address])

  useEffect(() => {
    if (address) {
      const docRef = doc(db, 'addresses', address)
      const unsubscribe = onSnapshot(docRef, (snap) => {
        const point = snap.get('point')
        setPoint(point)
      })
      return () => unsubscribe()
    }
  }, [address])

  const onConsumePoint = useCallback(
    async (amountOfRequestTokens: number) => {
      if (address) {
        // decrease own points
        consumePoint(address, amountOfRequestTokens * 100)

      }
    },
    [address])


  return { point, address, onConsumePoint }
}
