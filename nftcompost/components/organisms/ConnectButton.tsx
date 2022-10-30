import { Web3Button } from '@thirdweb-dev/react'
import React from 'react'

type ConnectButtonProps = {
  contractAddress: string
}
export const ConnectButton: React.FC<ConnectButtonProps> = (props) => {
  const { contractAddress } = props
  return (
    <Web3Button
      contractAddress={contractAddress}
      action={async (contract) =>
        await contract.erc721.claim(1) //1 claim per one address
      }
      // If the function is successful, we can do something here.
      onSuccess={(result) => {
        console.log(result)
        alert(
          `Successfully minted ${result.length} NFT${result.length > 1 ? 's' : ''
          }!`
        )
      }
      }
      // If the function fails, we can do something here.
      onError={(error) => alert(error?.message)}
      accentColor='#ff4500'
      colorMode='dark'
    >
      Mint (Free)
    </Web3Button>
  )
}
