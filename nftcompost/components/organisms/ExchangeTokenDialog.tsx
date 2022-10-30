import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { connectedAddress } from '../../store/OwnerAddrState'
import { NumericField } from '../molecules/NumericField'
import { useToken } from '../../hooks/useToken'
import { useOwnPoint } from '../../hooks/useOwnPoint'

type ExchangeTokenDialogProps = {
  isOpen: boolean
  onClose: () => void
}
export const ExchangeTokenDialog: React.FC<ExchangeTokenDialogProps> = (props) => {
  const { isOpen, onClose } = props
  const { point, address } = useOwnPoint()
  const { onRequestToken } = useToken()
  const [value, setValue] = useState<number>(0)
  useEffect(() => {
    if (isOpen)
      setValue(0)
  }, [isOpen])

  const handleOnClose = () => {
    onClose()
  }
  return (
    <Dialog open={isOpen} onClose={handleOnClose} >
      <DialogTitle>Exchange to Token</DialogTitle>
      <DialogContent>
        <Stack spacing={2} alignItems='center'>
          <Stack direction='row' spacing={1} justifyContent='center' alignItems='center'>
            <Typography>Current Point</Typography>
            <Typography variant='h6'>{point}</Typography>
          </Stack>
          <Typography variant='caption'>1Token/100Point</Typography>
          <NumericField
            label='number of token'
            value={value}
            max={Math.floor(point / 100)}
            onChange={(v) => setValue(v)} />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' fullWidth onClick={handleOnClose}>Cancel</Button>
        <Button
          variant='contained'
          fullWidth
          onClick={() => {
            console.log(address)
            onRequestToken(value, address)
            onClose()
          }}
          disabled={value === 0}>
          Exchange</Button>
      </DialogActions>
    </Dialog>
  )
}
