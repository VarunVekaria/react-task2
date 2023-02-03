import { Pagination, Stack } from '@mui/material'
import React from 'react'
import "./Page.css"
export const Page = () => {
  return (
    <div className='pageproperty'>
    <Stack spacing={2}>
      <Pagination count={4} />   
    </Stack>
    </div>
  )
}
