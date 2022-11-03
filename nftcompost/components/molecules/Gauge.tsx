import { Stack } from '@mui/system'
import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'

type GaugeProps = {
  amount: number
  max: number
}
export const Gauge: React.FC<GaugeProps> = (props) => {
  const { amount, max } = props
  const a = amount > max ? max : amount
  const amountStars = [...Array(a)].map((_, i) => {
    return <StarIcon
      key={i}
      color={a < 2 ? 'error' : 'primary'} />
  })
  const emptyStars = [...Array(max - a)].map((_, i) => (
    <StarBorderIcon key={i} />
  ))
  return (
    <Stack direction='row'>
      {amountStars.map((s) => s)}
      {emptyStars.map((s) => s)}
    </Stack>
  )
}
