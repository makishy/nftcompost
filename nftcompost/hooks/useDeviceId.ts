import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import { useCallback, useEffect, useState } from 'react'
import { db } from '../lib/firebase'
import { addAddress, getAddressValue } from '../services/FirestoreService'

export const useDeviceId = (address?: string) => {
  const [deviceId, setDeviceId] = useState<string>()
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

  return { deviceId }
}
