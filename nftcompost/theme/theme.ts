import { createTheme } from '@mui/material/styles'
import shadows, { Shadows } from '@mui/material/styles/shadows'

export const theme = createTheme({
  shadows: shadows.map(() => "none") as Shadows,
  palette: {
    primary: {
      main: '#4b0082',
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