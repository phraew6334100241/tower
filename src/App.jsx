import { useState } from 'react'
import './App.css'
import MyButton from './components/MyButton'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)
const user= {
  id:"Lo12",
  name:"alex",
  phone:"0999"

}

  function handelCick() {
    setCount(count +1)
  }

  function handelCickk() {
    setCount(count + count)
  }
  return (
    <>1
      <div>
        <h1>Home</h1>
        <img src="https://cdn.pixabay.com/photo/2014/02/02/17/41/photos-256889_640.jpg" height="150px" width="100px" />
        <MyButton/>
        <p>{count}</p>
        <p>{user.id}</p>
        <p>{user.name}</p>
        <button onClick={handelCick}>+</button>
        <button onClick={handelCickk}>+</button>
        <Profile data ={user}/>
      </div>
    </>
  )
}

export default App
