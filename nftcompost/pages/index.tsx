import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ClaimNFTCompost } from '../components/organisms/ClaimNFTCompost'
import { PageTemplate } from '../components/templates/PageTemplate'
import { Title } from '../components/atoms/Title'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NFTCompost</title>
        <SEO />
      </Head>
      <PageTemplate>
        <Title />
        <Box mt={3} />
        <ClaimNFTCompost />
      </PageTemplate>
    </>
  )
}

const SEO = () => {
  return (
    <>
      <meta name='viewport' content='width=device-width,initial-scale=1.0' />
      <meta
        name='description'
        content={'Grow compost and save the world!'}
      />
      <meta property='og:url' content={'https://makishy-dapps.web.app/'} />
      <meta property='og:title' content={'NFTCompost web site'} />
      <meta property='og:site_name' content={'NFTCompost'} />
      <meta
        property='og:description'
        content={'Join the game of Grow Compost and save the world!'}
      />
      <meta property='og:type' content='website' />
      <meta
        property='og:image'
        content={'https://makishy-dapps.web.app/Compost.png'}
      />
    </>
  )
}

export default Home
