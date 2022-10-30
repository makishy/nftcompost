import { Alert, Snackbar } from '@mui/material'
import React from 'react'
type SuccessSnackBarProps = {
  isOpen: boolean
  onClose: () => void
  message: string
}
export const SuccessSnackBar: React.FC<SuccessSnackBarProps> = (props) => {
  const { isOpen, onClose, message } = props
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={3000}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity="success" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}
