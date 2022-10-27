import { IconButton, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

type NumericFieldProps = {
  label: string
  value: number
  min?: number
  max?: number
  onChange: (value: number) => void
}
export const NumericField: React.FC<NumericFieldProps> = (props) => {
  const { label, value, min, max, onChange } = props
  const MIN = min ?? 0
  const MAX = max ?? 100
  const [val, setVal] = useState<number>(value ?? 0)
  return (
    <Stack direction='row'>
      <IconButton onClick={() => {
        const newValue = val > MIN ? val - 1 : MIN
        setVal(newValue)
        onChange(newValue)
      }}>
        <RemoveIcon />
      </IconButton>
      <TextField
        label={label}
        type='number'
        value={val}
        onChange={(e) => {
          if (e.target.value.length !== 0) {
            let v = parseInt(e.target.value)
            if (v <= 0) v = 0
            setVal(v)
            onChange(v)
          }
        }}
      />
      <IconButton onClick={() => {
        const newValue = val < MAX ? val + 1 : MAX
        setVal(newValue)
        onChange(newValue)
      }}>
        <AddIcon />
      </IconButton>
    </Stack>
  )
}
