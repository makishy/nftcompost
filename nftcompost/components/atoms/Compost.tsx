import { Stack } from '@mui/material'
import React from 'react'

type CompostProps = {
  color?: 'red'
  isCry?: boolean
}
export const CompostImg: React.FC<CompostProps> = (props) => {
  const { color, isCry } = props
  return (
    <Stack direction='row' justifyContent='center' margin={4}>
      {
        color === 'red' ?
          <img src='/CompostRed.png' alt='compost' />
          :
          isCry ?
            <img src='/Compost_cry.png' alt='compost' /> :
            <img src='/Compost.png' alt='compost' />
      }
    </Stack>
  )
}
