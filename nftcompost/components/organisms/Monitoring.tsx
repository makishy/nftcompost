import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import { MonitoringState } from '../../entities/MonitoringState'
import { useDeviceId } from '../../hooks/useDeviceId'
import { useDeviceMonitoringState } from '../../hooks/useMonitoringState'
import { usePoint } from '../../hooks/usePoint'
import { CompostImg } from '../atoms/Compost'
import { EmptyCard } from '../molecules/EmptyCard'
import { Gauge } from '../molecules/Gauge'
import { PageTemplate } from '../templates/PageTemplate'
import { OwnNFT } from './OwnNFT'
import { Point } from './Point'
import { State } from './State'

export const Monitoring: React.FC = () => {
  const { point, address } = usePoint()
  const { deviceId } = useDeviceId(address)
  const { monitoringStates } = useDeviceMonitoringState(deviceId)
  console.log(monitoringStates)
  const isCry = _getIsCry(monitoringStates[0])
  return (
    <PageTemplate>
      <Stack spacing={1}>
        <OwnNFT isCry={isCry} />
        {monitoringStates.length === 0 ?
          <EmptyCard /> :
          monitoringStates.map((s, i) => {
            return (<State key={i} state={s} />)
          })}
        <Point point={point} />
      </Stack>
    </PageTemplate>
  )
}

const _getIsCry = (monitoringState?: MonitoringState) => {
  if (!monitoringState) return false
  return monitoringState.humidityPoint < 2 ||
    monitoringState.moisturePoint < 2 ||
    monitoringState.temperaturePoint < 2 ||
    monitoringState.weightPoint < 2
}
