import { useEffect, useState } from 'react'
import { MonitoringState } from '../entities/MonitoringState'
import { db } from '../lib/firebase'
import {
  collection,
  doc,
  getDocs,
} from 'firebase/firestore'
export const useDeviceMonitoringState = (deviceId?: string) => {
  const [monitoringStates, setMonitoringStates] = useState<MonitoringState[]>([])
  useEffect(() => {
    const f = async () => {
      if (deviceId) {
        const docRef = doc(db, 'devices', deviceId)
        const pointRef = collection(docRef, 'point')
        const snap = await getDocs(pointRef)
        snap.forEach((doc) => {
          setMonitoringStates([MonitoringState.fromData(doc.data())])
          console.log(doc.id, doc.data())
        })
      }
    }
    f()
  }, [deviceId])
  return { monitoringStates }
}
