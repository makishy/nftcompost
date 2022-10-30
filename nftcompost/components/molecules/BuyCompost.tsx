/* eslint-disable @next/next/no-img-element */
import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import { useActiveClaimCondition, useAddress, useClaimedNFTSupply, useContract, useContractMetadata, useUnclaimedNFTSupply, Web3Button } from '@thirdweb-dev/react'
import { NFT } from '@thirdweb-dev/sdk'
import { formatUnits, parseUnits } from 'ethers/lib/utils'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { connectedAddress } from '../../store/OwnerAddrState'
import { CompostImg } from '../atoms/Compost'
const myNftDropContractAddress = '0xe8bA90b77532ee32E773d287Ed8B35150F782640'
export const BuyCompost: React.FC = () => {
  const router = useRouter()
  const [_, setOwnerAddr] = useRecoilState(connectedAddress)
  const [quantity] = useState(1) // default to 1
  const { contract: nftDrop } = useContract(myNftDropContractAddress)
  const { data: activeClaimCondition } = useActiveClaimCondition(nftDrop)
  // Check price
  const price = parseUnits(
    activeClaimCondition?.currencyMetadata.displayValue || '0',
    activeClaimCondition?.currencyMetadata.decimals
  )
  // Multiply depending on quantity
  const priceToMint = price.mul(1) //quantity 1
  const address = useAddress()
  const [nfts, setNfts] = useState<NFT>()

  // Load claimed supply and unclaimed supply
  const { data: unclaimedSupply } = useUnclaimedNFTSupply(nftDrop)
  const { data: claimedSupply } = useClaimedNFTSupply(nftDrop)

  useEffect(() => {
    console.log(nftDrop)
    const f = async () => {
      if (nftDrop && address) {
        const tokenId = await nftDrop.erc721.getOwnedTokenIds(address);
        if (tokenId[0]) {
          const nfts = await nftDrop.erc721.get(tokenId[0].toNumber());
          setNfts(nfts)
        }
      }
    }
    f()
  }, [nftDrop, setNfts, address])

  useEffect(() => {
    const f = async () => {
      if (nftDrop && address) {
        console.log(address)
        const balance = await nftDrop.erc721.balanceOf(address);
        console.log(balance.toNumber());
        if (balance.toNumber() >= 1) {
          router.push('/composts')
        }
      }
    }
    f()
  }, [nftDrop, address, router])

  useEffect(() => {
    if (nfts?.owner) {
      const address = nfts?.owner
      setOwnerAddr(address!)
    }
  }, [nfts?.owner, setOwnerAddr])

  return (
    <Stack spacing={1}>
      <Card>
        <CardContent>
          <CompostImg />
          <Box mt={3} />
          <Stack direction='row' justifyContent='center' alignItems='center' spacing={1}>
            <Typography variant='body2'>
              remaining
            </Typography>
            <Typography variant='h6'>
              {unclaimedSupply?.toNumber()}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
      <Box mt={6} />
      <Web3Button
        contractAddress={myNftDropContractAddress}
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
        {`Mint${quantity > 1 ? ` ${quantity}` : ''}${activeClaimCondition?.price.eq(0)
          ? ' (Free)'
          : activeClaimCondition?.currencyMetadata.displayValue
            ? ` (${formatUnits(
              priceToMint,
              activeClaimCondition.currencyMetadata.decimals
            )} ${activeClaimCondition?.currencyMetadata.symbol})`
            : ''
          }`}
      </Web3Button>
    </Stack >
  )
}
