import { Box, Typography } from '@mui/material'
import React from 'react'

type BallonProps = {
  message: string
  state: 'success' | 'error'
}
export const Balloon: React.FC<BallonProps> = (props) => {
  const { message, state } = props
  return (
    <Box
      display='flex'
      bgcolor={state === 'success' ? 'lightgray' : 'lightpink'}
      justifyContent='center'
      alignItems='center'
      height={60}
      width={250}
      borderRadius={2}
      border={2}
      borderColor={'black'}
      sx={{ opacity: 0.6 }}
    >
      <Typography variant='body1' sx={{ color: 'black' }}>
        {message}
      </Typography>
    </Box>
  )
}
