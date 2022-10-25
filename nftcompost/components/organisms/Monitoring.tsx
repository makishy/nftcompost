import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import { useAddress } from '../../hooks/useAddress'
import { useMonitoringState } from '../../hooks/useMonitoringState'
import { CompostImg } from '../atoms/Compost'
import { EmptyCard } from '../molecules/EmptyCard'
import { Gauge } from '../molecules/Gauge'
import { PageTemplate } from '../templates/PageTemplate'
import { Point } from './Point'
import { State } from './State'

type MonitoringProps = {
  address?: string
}
export const Monitoring: React.FC<MonitoringProps> = (props) => {
  const { address } = props
  const { deviceId ,point} = useAddress(address)
  const {monitoringStates} = useMonitoringState(deviceId)
  return (
    <PageTemplate>
      <Stack spacing={1}>
        <CompostImg color='red' />
        {monitoringStates.length ===0 ?
        <EmptyCard/>:
        monitoringStates.map((s,i)=>{
          return (<State key={i} state={s}/>)
        })}
        <Point point={point}/>
      </Stack>
    </PageTemplate>
  )
}
