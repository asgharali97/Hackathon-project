import { useEffect } from "react"
import Lenis from 'lenis'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from "react-router-dom"

function App() {
  useEffect(()=>{
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
     
  },[])
  

  return (
    <>
    {/* Fredoka One */}
    <div className="h-screen">
      <Header/>
      <main>
        <Outlet/>
      </main>
     <Footer/>
     
    </div>
    
    </>
  )
}

export default App
