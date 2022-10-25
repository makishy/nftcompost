import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../lib/firebase'
import { getAddressValue } from '../services/FirestoreService'

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
  return { deviceId, point }
}
