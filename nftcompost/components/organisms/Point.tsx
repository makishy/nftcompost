import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { ExchangeTokenDialog } from './ExchangeTokenDialog'

type PointProps = {
  point: number
}
export const Point: React.FC<PointProps> = (props) => {
  const { point } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <ExchangeTokenDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
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
              <Typography variant='h6'>{point}</Typography>
              <Typography variant='body1'>pt</Typography>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions sx={{ justifyContent: 'end' }}>
          <Button variant='outlined' onClick={() => setIsOpen(true)}>to tokens</Button>
        </CardActions>
      </Card>
    </>
  )
}
