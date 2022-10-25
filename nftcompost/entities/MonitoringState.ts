import { DocumentData } from 'firebase/firestore'

type MonitoringStateProps = {
  microorganismPoint: number
  nutrientSourcePoint: number
  amountOfWaterPoint: number
  temperaturePoint: number
}
export class MonitoringState {
  readonly microorganismPoint: number
  readonly nutrientSourcePoint: number
  readonly amountOfWaterPoint: number
  readonly temperaturePoint: number
  constructor(props: MonitoringStateProps) {
    this.microorganismPoint = props.microorganismPoint
    this.nutrientSourcePoint = props.nutrientSourcePoint
    this.amountOfWaterPoint = props.amountOfWaterPoint
    this.temperaturePoint = props.temperaturePoint
  }
  static fromData(data?: DocumentData) {
    return new MonitoringState({
      microorganismPoint: data?.['microorganismPoint'] as number,
      nutrientSourcePoint: data?.['nutrientSourcePoint'] as number,
      amountOfWaterPoint: data?.['amountOfWaterPoint'] as number,
      temperaturePoint: data?.['temperaturePoint'] as number,
    })
  }
}
