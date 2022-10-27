import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { BuyCompost } from '../components/molecules/BuyCompost'
import { InputWalletAddressDialog } from '../components/molecules/InputWalletAddressDialog'
import { PageTemplate } from '../components/templates/PageTemplate'
import { Title } from '../components/atoms/Title'
import styles from '../styles/Home.module.css'
import { useAddress } from '../hooks/useAddress'

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  return (
    <PageTemplate>
      <InputWalletAddressDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <Title />
      <Box mt={3} />
      <BuyCompost
        onClick={() => {
          setIsOpen(true)
        }}
      />
    </PageTemplate>
  )
}

export default Home
