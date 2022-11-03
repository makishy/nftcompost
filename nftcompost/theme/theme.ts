import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#327A32',
    },
    secondary: {
      main: '#FF9900',
    }
  },
  typography: {
    body1: {
      fontSize: 14
    },
    body2: {
      fontSize: 12
    },
  }
})