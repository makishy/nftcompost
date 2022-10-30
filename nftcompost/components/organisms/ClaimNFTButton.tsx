import { Web3Button } from '@thirdweb-dev/react'
import React, { useState } from 'react'
import { useJoiner } from '../../hooks/useJoiner'
import { SuccessSnackBar } from '../molecules/SuccessSnackBar'

type ClaimNFTButtonProps = {
  contractAddress: string
  onSuccess?: () => void
}
export const ClaimNFTButton: React.FC<ClaimNFTButtonProps> = (props) => {
  const { contractAddress, onSuccess } = props
  const [isOpenSuccessBar, setIsOpenSuccessBar] = useState(false)
  const handleSnackBarClose = () => {
    setIsOpenSuccessBar(false)
  }
  return (
    <>
      <SuccessSnackBar
        isOpen={isOpenSuccessBar}
        onClose={handleSnackBarClose}
        message='Successfully claim 1 NFT!' />
      <Web3Button
        contractAddress={contractAddress}
        action={async (contract) =>
          await contract.erc721.claim(1) //1 claim per one address
        }
        onSuccess={(result) => {
          console.log(result)
          if (onSuccess) {
            onSuccess()
          }
        }
        }
        // If the function fails, we can do something here.
        onError={(error) => alert(error?.message)}
        accentColor='#ff4500'
        colorMode='dark'
      >
        Claim NFT (Free)
      </Web3Button>
    </>
  )
}
