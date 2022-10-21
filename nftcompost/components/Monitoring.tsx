import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import { CompostImg } from './Compost'
import { Gauge } from './Gauge'
import { PageTemplate } from './PageTemplate'
import { Point } from './Point'
import { State } from './State'

export const Monitoring = () => {
  return (
    <PageTemplate>
      <Stack spacing={1}>
        <CompostImg color='red' />
        <State />
        <Point />
      </Stack>
    </PageTemplate>
  )
}
