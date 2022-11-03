import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { DocumentData } from 'firebase/firestore'

dayjs.extend(timezone)
dayjs.extend(utc)

type DeviceLogProps = {
  createdAt: number
  microorganism: number
  nutrientSource: number
  amountOfWater: number
  temperature: number
}

export class DeviceLog {
  readonly createdAt: number
  readonly weight: number
  readonly moisture: number
  readonly humidity: number
  readonly temperature: number
  constructor(props: DeviceLogProps) {
    this.createdAt = props.createdAt
    this.weight = props.microorganism
    this.moisture = props.nutrientSource
    this.humidity = props.amountOfWater
    this.temperature = props.temperature
  }
  get formattedCreatedAt(): string {
    return dayjs(this.createdAt * 1000).format('HH:mm MM.DD.YYYY')
  }
  static fromData(data: DocumentData) {
    return new DeviceLog({
      createdAt: 1111,
      amountOfWater: data?.['amountOfWater'],
      nutrientSource: data?.['nutrientSource'],
      microorganism: data?.['microorganism'],
      temperature: data?.['temperature'],
    })
  }
}
