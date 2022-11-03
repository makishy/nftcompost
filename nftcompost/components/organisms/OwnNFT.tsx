import { Box, CircularProgress } from '@mui/material'
import { useAddress, useContract } from '@thirdweb-dev/react'
import React, { useEffect, useState } from 'react'
import { nftContractAddress } from '../../entities/SmartContract'
import Compost from '../../pages/composts'
import { CompostImg } from '../atoms/Compost'
import { ClaimNFTButton } from './ClaimNFTButton'

type OwnNFTProps = {
  isCry?: boolean
}
export const OwnNFT: React.FC<OwnNFTProps> = (props) => {
  const { isCry } = props
  const { contract: nftDrop } = useContract(nftContractAddress)
  const address = useAddress()
  const [nftImage, setNftImage] = useState<string | undefined>()

  useEffect(() => {
    const f = async () => {
      if (!isCry && nftDrop && address) {
        const tokenId = await nftDrop.erc721.getOwnedTokenIds(address);
        //owner can have only one nft in this use case.
        if (tokenId[0]) {
          const nfts = await nftDrop.erc721.get(tokenId[0].toNumber());
          const image = nfts?.metadata?.image ?? undefined
          setNftImage(image)
        }
      }
    }
    f()
  }, [isCry, nftDrop, address])
  return (
    <Box display='flex' justifyContent='center'>
      {!address ?
        <ClaimNFTButton contractAddress={nftContractAddress} />
        :
        isCry ? <CompostImg isCry={true} /> :
          !nftImage ?
            <CircularProgress /> :
            <Box >
              <img
                style={{ width: 128 }}
                src={nftImage}
                alt='nft image' />
            </Box>
      }

    </Box>
  )
}
