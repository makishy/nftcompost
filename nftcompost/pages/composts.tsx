import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { PageTemplate } from '../components/templates/PageTemplate'
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart'
import TokenIcon from '@mui/icons-material/Token'
import HistoryIcon from '@mui/icons-material/History'
import { useEffect, useState } from 'react'
import { Monitoring } from '../components/organisms/Monitoring'
import { Tokens } from '../components/organisms/Tokens'
import { Logs } from '../components/organisms/Logs'
import { RouterUtils } from '../utils/RouterUtil'
import { useRecoilState } from 'recoil'
import { connectedAddress } from '../store/OwnerAddrState'
const Compost: NextPage = () => {
  const router = useRouter()
  const { address } = router.query
  const [selectedTab, setSelectedTab] = useState(0)
  const [ownerAddr, setOwnerAddr] = useRecoilState(connectedAddress)
  useEffect(() => {
    if (address) {
      const a = RouterUtils.getFirst(address)
      setOwnerAddr(a)
    }
  }, [address, setOwnerAddr])

  return (
    <PageTemplate>
      {selectedTab === 0 ? (
        <Monitoring />
      ) : selectedTab === 1 ? (
        <Tokens />
      ) : (
        <Logs />
      )}
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={selectedTab}
          onChange={(_, value) => {
            setSelectedTab(value)
          }}
        >
          <BottomNavigationAction
            label='monitoring'
            icon={<MonitorHeartIcon />}
          />
          <BottomNavigationAction label='tokens' icon={<TokenIcon />} />
          <BottomNavigationAction label='logs' icon={<HistoryIcon />} />
        </BottomNavigation>
      </Paper>
    </PageTemplate>
  )
}

export default Compost
