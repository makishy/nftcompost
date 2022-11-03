import React from 'react'
import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import { DisplayLabelValue } from '../molecules/DisplayLabelValue'
import { Gauge } from '../molecules/Gauge'
import { MonitoringState } from '../../entities/MonitoringState'

type StateProps = {
  state: MonitoringState
}
export const State: React.FC<StateProps> = (props) => {
  const { state } = props

  return (
    <Card>
      <CardContent>
        <Stack>
          <Typography variant='h5'>current state</Typography>
        </Stack>
        <Box mt={2} />
        <Stack>
          <DisplayLabelValue
            label='Temperature'
            color={state.temperaturePoint < 2 ? 'red' : 'primary'}
            value={<Gauge amount={state.temperaturePoint} max={5} />}
          />
          <DisplayLabelValue
            label='Moisture'
            color={state.moisturePoint < 2 ? 'red' : 'primary'}
            value={<Gauge amount={state.moisturePoint} max={5} />}
          />
          <DisplayLabelValue
            label='Humidity'
            color={state.humidityPoint < 2 ? 'red' : 'primary'}
            value={<Gauge amount={state.humidityPoint} max={5} />}
          />
          <DisplayLabelValue
            label='Weight/volume'
            color={state.weightPoint < 2 ? 'red' : 'primary'}
            value={<Gauge amount={state.weightPoint} max={5} />}
          />
        </Stack>
      </CardContent>
    </Card>
  )
}
