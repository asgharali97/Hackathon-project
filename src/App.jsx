import Header from './components/Header'
import { Outlet } from "react-router-dom"


function App() {
  
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
