import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { useAddress } from '../../hooks/useAddress'
import { connectedAddress } from '../../store/OwnerAddrState'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { NumericField } from '../molecules/NumericField'
import { useToken } from '../../hooks/useToken'

type ExchangeTokenDialogProps = {
  isOpen: boolean
  onClose: () => void
}
export const ExchangeTokenDialog: React.FC<ExchangeTokenDialogProps> = (props) => {
  const { isOpen, onClose } = props
  const address = useRecoilValue(connectedAddress)
  const { point } = useAddress(address)
  const { onRequestToken } = useToken()
  const [value, setValue] = useState<number>(0)
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
            onRequestToken(value, address)
            onClose()
          }}
          disabled={value === 0}>
          Exchange</Button>
      </DialogActions>
    </Dialog>
  )
}
