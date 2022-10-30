/* eslint-disable @next/next/no-img-element */
import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import { useActiveClaimCondition, useAddress, useClaimedNFTSupply, useContract, useContractMetadata, useUnclaimedNFTSupply, Web3Button } from '@thirdweb-dev/react'
import { NFT } from '@thirdweb-dev/sdk'
import { formatUnits, parseUnits } from 'ethers/lib/utils'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { nftContractAddress } from '../../entities/SmartContract'
import { connectedAddress } from '../../store/OwnerAddrState'
import { CompostImg } from '../atoms/Compost'
import { ClaimNFTButton } from './ClaimNFTButton'

export const ClaimNFTCompost: React.FC = () => {
  const router = useRouter()
  const [_, setOwnerAddr] = useRecoilState(connectedAddress)
  const { contract: nftDrop } = useContract(nftContractAddress)
  const address = useAddress()
  const [nfts, setNfts] = useState<NFT>()
  const { data: unclaimedSupply } = useUnclaimedNFTSupply(nftDrop)

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
      <ClaimNFTButton contractAddress={nftContractAddress} />
    </Stack >
  )
}
