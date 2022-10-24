import { useEffect, useState } from 'react'
import { MonitoringState } from '../entities/MonitoringState'
import { db } from '../lib/firebase'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
export const useMonitoringState = (deviceId?: string) => {
  const [monitoringState, setMonitoringState] = useState<MonitoringState>()
  useEffect(() => {
    const f = async () => {
      if (deviceId) {
        const docRef = doc(db, 'devices', deviceId)
        const pointRef = collection(docRef, 'point')
        const snap = await getDocs(pointRef)
        snap.forEach((doc) => {
          console.log(doc.id, doc.data())
        })
      }
    }
    f()
  }, [deviceId])
}
