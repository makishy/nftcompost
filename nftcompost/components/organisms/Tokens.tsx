import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { useOwnPoint } from '../../hooks/useOwnPoint'
import { connectedAddress } from '../../store/OwnerAddrState'
import { Coin } from '../atoms/Coin'
import { DisplayLabelValue } from '../molecules/DisplayLabelValue'
import { Point } from './Point'


export const Tokens = () => {
  const address = useRecoilValue(connectedAddress)
  const { point } = useOwnPoint()

  return (
    <Stack spacing={1}>
      <Coin />
      <Card>
        <CardContent>
          <Typography variant='h6'>My Token</Typography>
          <Stack>
            <DisplayLabelValue
              label='Tokens'
              value={<Token value={777} unit='CPT' />}
            />
            <DisplayLabelValue
              label='TotalSupply'
              value={<Token value={10000} unit='CPT' />}
            />
          </Stack>
        </CardContent>
      </Card>
      <Point point={point} />
    </Stack>
  )
}

type TokenProps = {
  value: number
  unit: string
}
const Token: React.FC<TokenProps> = (props) => {
  const { value, unit } = props
  return (
    <Stack direction='row' alignItems='center' spacing={1}>
      <Typography variant='h6'>{value}</Typography>
      <Typography variant='body2'>{unit}</Typography>
    </Stack>
  )
}
