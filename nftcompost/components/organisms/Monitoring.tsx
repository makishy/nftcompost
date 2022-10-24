import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import { useAddress } from '../../hooks/useAddress'
import { useMonitoringState } from '../../hooks/useMonitoringState'
import { CompostImg } from '../atoms/Compost'
import { Gauge } from '../molecules/Gauge'
import { PageTemplate } from '../templates/PageTemplate'
import { Point } from './Point'
import { State } from './State'

type MonitoringProps = {
  address?: string
}
export const Monitoring: React.FC<MonitoringProps> = (props) => {
  const { address } = props
  const { deviceId } = useAddress(address)
  useMonitoringState(deviceId)
  return (
    <PageTemplate>
      <Stack spacing={1}>
        <CompostImg color='red' />
        <State />
        <Point />
      </Stack>
    </PageTemplate>
  )
}
