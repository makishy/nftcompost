import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ChainId } from '@thirdweb-dev/sdk'
import { ThirdwebProvider } from '@thirdweb-dev/react'

const activeChainId = ChainId.Goerli

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ThirdwebProvider>

  )
}

export default MyApp
