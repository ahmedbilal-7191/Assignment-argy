import { useState } from 'react'
import './App.css'
import Container from './components/Container'
import Header from './components/Header'
import SubHeader from './components/SubHeader'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Container>
      <Header/>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

    </Container> */}

      <Header />
      <div className='bg-blue-900'>
        <SubHeader />

      </div>
    

        <Outlet />
    
    

    </>
  )
}

export default App
