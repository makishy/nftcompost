import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export const EmptyCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography>No Data</Typography>
      </CardContent>
    </Card>
  )
}
