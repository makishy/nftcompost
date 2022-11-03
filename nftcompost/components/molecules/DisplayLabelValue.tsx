import { Stack, Typography } from '@mui/material'
import { ReactElement } from 'react'

type DisplayLabelValueProps = {
  label: string
  value: ReactElement
  color?: 'green' | 'red'
}
export const DisplayLabelValue: React.FC<DisplayLabelValueProps> = (props) => {
  const { label, value, color } = props
  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={2}
    >
      <Typography width={100} color={color}>{label}</Typography>
      <>{value}</>
    </Stack>
  )
}
