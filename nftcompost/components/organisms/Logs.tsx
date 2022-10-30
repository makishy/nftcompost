import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import React from 'react'
import { useDeviceLog } from '../../hooks/useDevice'

export const Logs = () => {
  const logs = useDeviceLog()
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>createdAt</TableCell>
            <TableCell>microorganism</TableCell>
            <TableCell>Nutrient source</TableCell>
            <TableCell>amount of water</TableCell>
            <TableCell>temperature</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logs.map((log, i) => (
            <TableRow key={i}>
              <TableCell component='th' scope='row'>
                {log.formattedCreatedAt}
              </TableCell>
              <TableCell align='right'>{log.microorganism}</TableCell>
              <TableCell align='right'>{log.nutrientSource}</TableCell>
              <TableCell align='right'>{log.amountOfWater}</TableCell>
              <TableCell align='right'>{log.temperature}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
