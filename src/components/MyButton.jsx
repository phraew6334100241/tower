import React from 'react'
import { Button,MenuItem } from '@mui/material'
function MyButton() {
    function handleClick(){
        alert("Oh no ++")
    }
  return (
    <div>
        <Button onClick={handleClick} variant='contained'>กดสิ</Button>
      s
    </div>


  )
}

export default MyButton