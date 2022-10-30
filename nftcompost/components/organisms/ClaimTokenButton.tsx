import { Web3Button } from '@thirdweb-dev/react'
import React from 'react'
import { tokenContractAddress } from '../../entities/SmartContract'

type ClaimTokenButtonProps = {
  amountToClaim: number
  onSuccess: () => void
  onError: () => void
}
export const ClaimTokenButton: React.FC<ClaimTokenButtonProps> = (props) => {
  const { amountToClaim, onSuccess, onError } = props
  return (
    <Web3Button
      accentColor="#5204BF"
      colorMode="dark"
      isDisabled={amountToClaim === 0}
      contractAddress={tokenContractAddress}
      action={async (contract) => {
        await contract.erc20.claim(amountToClaim)
      }}
      onSuccess={() => {
        onSuccess()
      }}
      onError={(err) => {
        alert(err)
        onError()
      }
      }
    >
      Claim Tokens
    </Web3Button>
  )
}
