import { useEffect } from "react"
import Lenis from 'lenis'
import Header from './components/Header'
import { Outlet } from "react-router-dom"

function App() {
  useEffect(()=>{
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
     
  },[])
  

  return (
    <>
    <div className="h-screen">
      <Header/>
      <main>
        <Outlet/>
      </main>
    </div>
    
    </>
  )
}

export default App
