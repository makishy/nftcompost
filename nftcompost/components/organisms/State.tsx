import React from 'react'
import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import { DisplayLabelValue } from '../molecules/DisplayLabelValue'
import { Gauge } from '../molecules/Gauge'

export const State = () => {
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
            value={<Gauge amount={3} max={5} />}
          />
          <DisplayLabelValue
            label='Nutrient source'
            value={<Gauge amount={2} max={5} />}
          />
          <DisplayLabelValue
            label='amount of water'
            value={<Gauge amount={4} max={5} />}
          />
          <DisplayLabelValue
            label='temperature'
            value={<Gauge amount={5} max={5} />}
          />
        </Stack>
      </CardContent>
    </Card>
  )
}
