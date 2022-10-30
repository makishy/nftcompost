import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useJoiner } from '../../hooks/useJoiner'

type InputWalletAddressDialogProps = {
  isOpen: boolean
  onClose: () => void
}
export const InputWalletAddressDialog: React.FC<
  InputWalletAddressDialogProps
> = (props) => {
  const { isOpen, onClose } = props
  const router = useRouter()
  const [address, setAddress] = useState<string>('')
  const { onAdd } = useJoiner()
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        <Typography>Enter Your Wallet Address</Typography>
      </DialogTitle>
      <DialogContent>
        <TextField
          variant='outlined'
          label='your wallet address'
          fullWidth
          margin='dense'
          onChange={(e) => setAddress(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant='contained'
          onClick={() => {
            onAdd(address)
            router.push(`/composts?address=${address}`)
          }}
        >
          Buy NFTCompost
        </Button>
      </DialogActions>
    </Dialog>
  )
}
