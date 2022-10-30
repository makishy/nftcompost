import { Box, CircularProgress } from '@mui/material'
import { useAddress, useContract } from '@thirdweb-dev/react'
import React, { useEffect, useState } from 'react'
import { nftContractAddress } from '../../entities/SmartContract'
import Compost from '../../pages/composts'
import { CompostImg } from '../atoms/Compost'
import { ConnectButton } from './ConnectButton'

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
        <ConnectButton contractAddress={nftContractAddress} />
        :
        !nftImage ?
          <CircularProgress /> :
          <Box >
            <CompostImg color='red' />
            <Box sx={{ zIndex: 'modal', position: 'absolute', top: 146, left: '43%' }}>
              <img
                style={{ width: 50 }}
                src={nftImage}
                alt='nft image'
              />
            </Box>
          </Box>

      }

    </Box>
  )
}
