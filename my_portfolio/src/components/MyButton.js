import React from 'react'
import { Button } from '@mui/material'

const MyButton = ({title}) => {
  return (
    <div>
        <Button size="large" sx={{ width:"100px",}}>
            {title}
        </Button>
    </div>
  )
}

export default MyButton