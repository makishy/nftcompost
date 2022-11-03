import { useEffect, useState } from 'react'
import { MonitoringState } from '../entities/MonitoringState'
import { db } from '../lib/firebase'
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
} from 'firebase/firestore'
export const useDeviceMonitoringState = (deviceId?: string) => {
  const [monitoringStates, setMonitoringStates] = useState<MonitoringState[]>([])
  useEffect(() => {
    const f = async () => {
      if (deviceId) {
        const docRef = doc(db, 'devices', deviceId)
        const pointRef = collection(docRef, 'point')
        const q = query(pointRef)
        const unsubscribe = onSnapshot(q, (snap) => {
          snap.docChanges().forEach((change) => {
            console.log('change', change)
            if (change.type === 'added' || change.type === 'modified') {
              console.log('change.doc', change.doc)
              const data = change.doc.data()
              console.log('data', data)
              setMonitoringStates([MonitoringState.fromData(data)])
            }
          })
        })
        return () => unsubscribe()
      }
    }
    f()
  }, [deviceId])


  return { monitoringStates }
}
