import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ChainId } from '@thirdweb-dev/sdk'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { theme } from '../theme/theme'
import { ThemeProvider } from '@mui/material'

const activeChainId = ChainId.Goerli

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </ThirdwebProvider>

  )
}

export default MyApp
