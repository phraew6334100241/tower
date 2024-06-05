import React from 'react'
import { useState } from 'react'
function MyButton() {
    function handleClick(){
        alert("Oh no ++")
    }
  return (
    <div>
        <button onClick={handleClick}>กดสิ</button>
    </div>
  )
}

export default MyButton