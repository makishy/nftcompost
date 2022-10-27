import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import { useCallback, useEffect, useState } from 'react'
import { db } from '../lib/firebase'
import { addAddress, getAddressValue } from '../services/FirestoreService'

export const useAddress = (address?: string) => {
  const [deviceId, setDeviceId] = useState<string>()
  const [point, setPoint] = useState<number>(0)
  useEffect(() => {
    const f = async () => {
      if (address) {
        const ret = await getAddressValue(address, 'deviceId') as string
        if (ret) {
          setDeviceId(ret)
        } else {
          console.log('no data')
        }
      }
    }
    f()
  }, [address])
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

  const onAdd = useCallback(
    (address: string) => {
      if (address.length !== 0) {
        addAddress(address)
      }
    },
    [],
  )

  return { deviceId, point, onAdd }
}
