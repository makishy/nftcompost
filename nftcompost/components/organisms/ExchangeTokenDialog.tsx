import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Snackbar, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { connectedAddress } from '../../store/OwnerAddrState'
import { NumericField } from '../molecules/NumericField'
import { usePoint } from '../../hooks/usePoint'
import { ClaimTokenButton } from './ClaimTokenButton'

type ExchangeTokenDialogProps = {
  isOpen: boolean
  onClose: () => void
}
export const ExchangeTokenDialog: React.FC<ExchangeTokenDialogProps> = (props) => {
  const { isOpen, onClose } = props
  const { point, onConsumePoint } = usePoint()
  const [value, setValue] = useState<number>(0)
  const [isOpenSuccessBar, setIsOpenSuccessBar] = useState(false)
  useEffect(() => {
    if (isOpen)
      setValue(0)
  }, [isOpen])

  const handleOnClose = () => {
    onClose()
  }
  const handleSnackBarClose = () => {
    setIsOpenSuccessBar(false)
  }
  return (
    <>
      <Snackbar
        open={isOpenSuccessBar}
        autoHideDuration={3000}
        onClose={handleSnackBarClose}
      >
        <Alert onClose={handleSnackBarClose} severity="success" sx={{ width: '100%' }}>
          Success claimed!!
        </Alert>
      </Snackbar>
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
              label='amount to claim'
              value={value}
              max={Math.floor(point / 100)}
              onChange={(v) => setValue(v)} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' size='large' onClick={handleOnClose}>Cancel</Button>
          <Box ml={1} />
          <ClaimTokenButton
            amountToClaim={value}
            onSuccess={() => {
              onConsumePoint(value)
              setIsOpenSuccessBar(true)
              onClose()
            }}
            onError={() => { }} />
        </DialogActions>
      </Dialog>
    </>
  )
}
