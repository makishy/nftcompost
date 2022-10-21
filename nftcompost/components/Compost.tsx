import { Stack } from '@mui/material'
import React from 'react'

type CompostProps = {
  color?: 'red'
}
export const CompostImg: React.FC<CompostProps> = (props) => {
  const { color } = props
  return (
    <Stack direction='row' justifyContent='center' margin={4}>
      {color === 'red' ? (
        <img src='/CompostRed.png' />
      ) : (
        <img src='/Compost.png' />
      )}
    </Stack>
  )
}
