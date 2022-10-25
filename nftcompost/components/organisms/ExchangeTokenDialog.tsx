import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { useAddress } from '../../hooks/useAddress'
import { connectedAddress } from '../../store/OwnerAddrState'

type ExchangeTokenDialogProps = {
  isOpen: boolean
  onClose: () => void
}
export const ExchangeTokenDialog: React.FC<ExchangeTokenDialogProps> = (props) => {
  const { isOpen, onClose } = props
  const address = useRecoilValue(connectedAddress)
  const { point } = useAddress(address)
  const [value, setValue] = useState<number>()
  const handleOnClose = () => {
    onClose()
  }
  return (
    <Dialog open={isOpen} onClose={handleOnClose} >
      <DialogTitle>Exchange to Token</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Stack direction='row' spacing={1} justifyContent='center' alignItems='center'>
            <Typography>Current Point</Typography>
            <Typography variant='h6'>{point}</Typography>
          </Stack>
          <TextField
            label='number of token'
            type='number'
            value={value}
            onChange={(e) => {
              let v = parseInt(e.target.value)
              if (v > point) v = point
              if (v <= 0) v = 0
              setValue(v)
            }}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' fullWidth onClick={handleOnClose}>Cancel</Button>
        <Button variant='contained' fullWidth>Exchange</Button>
      </DialogActions>


    </Dialog>
  )
}
