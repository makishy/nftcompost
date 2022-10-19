import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Box m={2}>
        <Stack direction='row' justifyContent='center'>
          <Typography variant='h3' fontWeight='bold'>
            NFTCompost
          </Typography>
        </Stack>
        <Box mt={3} />
        <Stack spacing={1}>
          <Card>
            <CardContent>
              <Stack direction='row' justifyContent='center'>
                <img src='/Compost.png' />
              </Stack>
            </CardContent>
          </Card>
          <Button variant='contained' fullWidth>
            Buy
          </Button>
        </Stack>
      </Box>
    </>
  )
}

export default Home
