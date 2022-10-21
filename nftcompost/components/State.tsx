import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import { Gauge } from './Gauge'

export const State = () => {
  return (
    <Card>
      <CardContent>
        <Stack>
          <Typography variant='h5'>current state</Typography>
        </Stack>
        <Box mt={2} />
        <Stack>
          <Display label='microorganism' gauge={<Gauge amount={3} max={5} />} />
          <Display
            label='Nutrient source'
            gauge={<Gauge amount={2} max={5} />}
          />
          <Display
            label='amount of water'
            gauge={<Gauge amount={4} max={5} />}
          />
          <Display label='temperature' gauge={<Gauge amount={5} max={5} />} />
        </Stack>
      </CardContent>
    </Card>
  )
}

type DisplayProps = {
  label: string
  gauge: ReactElement
}
const Display: React.FC<DisplayProps> = (props) => {
  const { label, gauge } = props
  return (
    <Stack direction='row' justifyContent='center' spacing={2}>
      <Typography>{label}</Typography>
      <>{gauge}</>
    </Stack>
  )
}
