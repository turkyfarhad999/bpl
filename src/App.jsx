import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import Players from './component/Players'
import './App.css'

function App() {
  const playerdata=fetch('/data.json')
  .then(res=>res.json())
  const [ coin , setCoin ]=useState(5000000)
  const [selectedPlayer,setSelectedPlayer]=useState([])

  return (
    <>
      <div>
       <Navbar coin={coin}></Navbar>
       <Banner></Banner>
       <Suspense fallback={<div className='text-center'><span className="loading loading-infinity loading-xl text-center "></span></div> }>
        <Players playerdata={playerdata} coin={coin} setCoin={setCoin} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} ></Players>
       </Suspense>

      </div>
    </>
  )
}

export default App
