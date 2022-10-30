import { Card, CardContent, Stack, Typography } from '@mui/material'
import { useAddress, useContract } from '@thirdweb-dev/react'
import { BigNumber } from 'ethers'
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { tokenContractAddress } from '../../entities/SmartContract'
import { usePoint } from '../../hooks/usePoint'
import { connectedAddress } from '../../store/OwnerAddrState'
import { Coin } from '../atoms/Coin'
import { DisplayLabelValue } from '../molecules/DisplayLabelValue'
import { Point } from './Point'


export const Tokens = () => {
  const { contract } = useContract(tokenContractAddress, "token-drop")
  const { point } = usePoint()
  const [balanceOf, setBalanceOf] = useState<string>()
  const [symbol, setSymbol] = useState<string>('')
  useEffect(() => {
    const f = async () => {
      if (contract) {
        const b = await contract?.balance()
        setBalanceOf(b.displayValue)
        setSymbol(b.symbol)
      }
    }
    f()
  }, [contract, point])

  return (
    <Stack spacing={1}>
      <Coin />
      <Card>
        <CardContent>
          <Typography variant='h6'>My Token</Typography>
          <Stack>
            <DisplayLabelValue
              label='BalanceOf'
              value={<Value value={balanceOf ?? "0"} unit={symbol} />}
            />
          </Stack>
        </CardContent>
      </Card>
      <Point point={point} />
    </Stack>
  )
}

type ValueProps = {
  value: string
  unit: string
}
const Value: React.FC<ValueProps> = (props) => {
  const { value, unit } = props
  return (
    <Stack direction='row' alignItems='center' spacing={1}>
      <Typography variant='h6'>{value}</Typography>
      <Typography variant='body2'>{unit}</Typography>
    </Stack>
  )
}
