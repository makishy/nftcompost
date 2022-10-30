import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ClaimNFTCompost } from '../components/organisms/ClaimNFTCompost'
import { PageTemplate } from '../components/templates/PageTemplate'
import { Title } from '../components/atoms/Title'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <PageTemplate>
      <Title />
      <Box mt={3} />
      <ClaimNFTCompost />
    </PageTemplate>
  )
}

export default Home
