import { Button, Card, CardContent, Stack } from '@mui/material'
import React from 'react'

type BuyCompostProps = {
  onClick: () => void
}
export const BuyCompost: React.FC<BuyCompostProps> = (props) => {
  const { onClick } = props
  return (
    <Stack spacing={1}>
      <Card>
        <CardContent>
          <Stack direction='row' justifyContent='center'>
            <img src='/Compost.png' />
          </Stack>
        </CardContent>
      </Card>
      <Button variant='contained' fullWidth onClick={onClick}>
        Buy
      </Button>
    </Stack>
  )
}
