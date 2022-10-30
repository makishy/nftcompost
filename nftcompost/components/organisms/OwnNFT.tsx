import { Box, CircularProgress } from '@mui/material'
import { useAddress, useContract } from '@thirdweb-dev/react'
import React, { useEffect, useState } from 'react'
import { nftContractAddress } from '../../entities/SmartContract'
import Compost from '../../pages/composts'
import { CompostImg } from '../atoms/Compost'
import { ClaimNFTButton } from './ClaimNFTButton'

export const OwnNFT = () => {
  const { contract: nftDrop } = useContract(nftContractAddress)
  const address = useAddress()
  const [nftImage, setNftImage] = useState<string | undefined>()

  useEffect(() => {
    console.log(nftDrop)
    console.log(address)
    const f = async () => {
      if (nftDrop && address) {
        const tokenId = await nftDrop.erc721.getOwnedTokenIds(address);
        if (tokenId[0]) {
          const nfts = await nftDrop.erc721.get(tokenId[0].toNumber());
          const image = nfts?.metadata?.image ?? undefined
          setNftImage(image)
        }
      }
    }
    f()
  }, [nftDrop, address])
  return (
    <Box display='flex' justifyContent='center'>
      {!address ?
        <ClaimNFTButton contractAddress={nftContractAddress} />
        :
        !nftImage ?
          <CircularProgress /> :
          <Box >
            <CompostImg color='red' />
            <Box sx={{ zIndex: 'modal', position: 'fixed', top: 147, left: '50%' }}>
              <img
                style={{ width: 44 }}
                src={nftImage}
                alt='nft image'
              />
            </Box>
          </Box>

      }

    </Box>
  )
}
