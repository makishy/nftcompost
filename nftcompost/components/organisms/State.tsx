import React from 'react'
import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import { DisplayLabelValue } from '../molecules/DisplayLabelValue'
import { Gauge } from '../molecules/Gauge'
import { MonitoringState } from '../../entities/MonitoringState'

type StateProps ={
  state: MonitoringState
}
export const State:React.FC<StateProps> = (props) => {
  const {state}  = props

  return (
    <Card>
      <CardContent>
        <Stack>
          <Typography variant='h5'>current state</Typography>
        </Stack>
        <Box mt={2} />
        <Stack>
          <DisplayLabelValue
            label='microorganism'
            value={<Gauge amount={state.microorganismPoint} max={5} />}
          />
          <DisplayLabelValue
            label='Nutrient source'
            value={<Gauge amount={state.nutrientSourcePoint} max={5} />}
          />
          <DisplayLabelValue
            label='amount of water'
            value={<Gauge amount={state.amountOfWaterPoint} max={5} />}
          />
          <DisplayLabelValue
            label='temperature'
            value={<Gauge amount={state.temperaturePoint} max={5} />}
          />
        </Stack>
      </CardContent>
    </Card>
  )
}
