import { Button, Card, CardContent, Stack } from '@mui/material'
import React from 'react'
import { CompostImg } from '../atoms/Compost'

type BuyCompostProps = {
  onClick: () => void
}
export const BuyCompost: React.FC<BuyCompostProps> = (props) => {
  const { onClick } = props
  return (
    <Stack spacing={1}>
      <Card>
        <CardContent>
          <CompostImg />
        </CardContent>
      </Card>
      <Button variant='contained' fullWidth onClick={onClick} size='large'>
        Buy
      </Button>
    </Stack>
  )
}
