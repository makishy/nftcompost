import { DeviceLog } from './DeviceLog'

export interface IDevice {
  load(): Promise<void>
  get logs(): DeviceLog[]
}
export class Device implements IDevice {
  load(): Promise<void> {
    //TODO
    throw new Error('Method not implemented.')
  }
  get logs(): DeviceLog[] {
    return dummyLogs
  }
}

const dummyLogs: DeviceLog[] = [
  new DeviceLog({
    createdAt: 1665529100,
    microorganism: 111,
    nutrientSource: 222,
    amountOfWater: 333,
    temperature: 28,
  }),
  new DeviceLog({
    createdAt: 1665529200,
    microorganism: 112,
    nutrientSource: 222,
    amountOfWater: 333,
    temperature: 28,
  }),
  new DeviceLog({
    createdAt: 1665529300,
    microorganism: 113,
    nutrientSource: 222,
    amountOfWater: 333,
    temperature: 28,
  }),
  new DeviceLog({
    createdAt: 1665529400,
    microorganism: 114,
    nutrientSource: 222,
    amountOfWater: 333,
    temperature: 28,
  }),
]
