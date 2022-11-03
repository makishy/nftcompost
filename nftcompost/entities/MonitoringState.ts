import { DocumentData } from 'firebase/firestore'

type MonitoringStateProps = {
  humidityPoint: number
  weightPoint: number
  moisturePoint: number
  temperaturePoint: number
}
export class MonitoringState {
  readonly humidityPoint: number
  readonly weightPoint: number
  readonly moisturePoint: number
  readonly temperaturePoint: number
  constructor(props: MonitoringStateProps) {
    this.humidityPoint = props.humidityPoint
    this.weightPoint = props.weightPoint
    this.moisturePoint = props.moisturePoint
    this.temperaturePoint = props.temperaturePoint
  }
  static fromData(data?: DocumentData) {
    return new MonitoringState({
      humidityPoint: data?.['humidityPoint'] as number,
      weightPoint: data?.['weightPoint'] as number,
      moisturePoint: data?.['moisturePoint'] as number,
      temperaturePoint: data?.['temperaturePoint'] as number,
    })
  }
}
