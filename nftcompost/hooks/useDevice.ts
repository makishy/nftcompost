import { useEffect, useState } from 'react'
import { Device } from '../entities/Device'
import { DeviceLog } from '../entities/DeviceLog'

const device = new Device()
export const useDeviceLog = () => {
  const [logs, setLogs] = useState<DeviceLog[]>([])
  useEffect(() => {
    const f = () => {
      if (device) {
        const l: DeviceLog[] = device.logs
        setLogs(l)
      }
    }
    f()
  }, [])
  return logs
}
