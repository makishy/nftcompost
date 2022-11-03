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
            <TableCell>Weight/volume</TableCell>
            <TableCell>Moisture</TableCell>
            <TableCell>Humidity</TableCell>
            <TableCell>Temperature</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logs.map((log, i) => (
            <TableRow key={i}>
              <TableCell component='th' scope='row'>
                {log.formattedCreatedAt}
              </TableCell>
              <TableCell align='right'>{log.weight}</TableCell>
              <TableCell align='right'>{log.moisture}</TableCell>
              <TableCell align='right'>{log.humidity}</TableCell>
              <TableCell align='right'>{log.temperature}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
