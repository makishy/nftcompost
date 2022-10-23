import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

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
  readonly microorganism: number
  readonly nutrientSource: number
  readonly amountOfWater: number
  readonly temperature: number
  constructor(props: DeviceLogProps) {
    this.createdAt = props.createdAt
    this.microorganism = props.microorganism
    this.nutrientSource = props.nutrientSource
    this.amountOfWater = props.amountOfWater
    this.temperature = props.temperature
  }
  get formattedCreatedAt(): string {
    return dayjs(this.createdAt * 1000).format('HH:mm MM.DD.YYYY')
  }
}
