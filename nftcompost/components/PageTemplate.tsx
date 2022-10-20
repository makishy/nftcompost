import { Box } from '@mui/material'
import React from 'react'

type PageTemplateProps = {
  children: React.ReactNode
}
export const PageTemplate: React.FC<PageTemplateProps> = (props) => {
  return <Box m={2}>{props.children}</Box>
}
