import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'

export const Point = () => {
  return (
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant='h5'>point</Typography>
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={1}
          >
            <Typography variant='h6'>1000</Typography>
            <Typography variant='body1'>pt</Typography>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: 'end' }}>
        <Button variant='outlined'>to tokens</Button>
      </CardActions>
    </Card>
  )
}
