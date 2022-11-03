import { Stack, Typography } from '@mui/material'
import React from 'react'

export const Title = () => {
  return (
    <Stack direction='row' justifyContent='center'>
      <Typography variant='h3' fontWeight='bold' color='primary'>
        NFTCompost
      </Typography>
    </Stack>
  )
}
