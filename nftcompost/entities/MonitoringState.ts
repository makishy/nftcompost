type MonitoringStateProps = {
  address: string
  microorganismPoint: number
  nutrientSourcePoint: number
  amountOfWaterPoint: number
  temperaturePoint: number
}
export class MonitoringState {
  readonly address: string
  readonly microorganismPoint: number
  readonly nutrientSourcePoint: number
  readonly amountOfWaterPoint: number
  readonly temperaturePoint: number
  constructor(props: MonitoringStateProps) {
    this.address = props.address
    this.microorganismPoint = props.microorganismPoint
    this.nutrientSourcePoint = props.nutrientSourcePoint
    this.amountOfWaterPoint = props.amountOfWaterPoint
    this.temperaturePoint = props.temperaturePoint
  }
}
