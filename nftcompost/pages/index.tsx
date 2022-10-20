import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { BuyCompost } from '../components/BuyCompost'
import { InputWalletAddressDialog } from '../components/InputWalletAddressDialog'
import { PageTemplate } from '../components/PageTemplate'
import { Title } from '../components/Title'
import styles from '../styles/Home.module.css'

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
