import { Stack, Typography } from '@mui/material'
import { ReactElement } from 'react'

type DisplayLabelValueProps = {
  label: string
  value: ReactElement
}
export const DisplayLabelValue: React.FC<DisplayLabelValueProps> = (props) => {
  const { label, value } = props
  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={2}
    >
      <Typography>{label}</Typography>
      <>{value}</>
    </Stack>
  )
}
