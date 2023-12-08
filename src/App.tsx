import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/Pages/LandingPage/Homepage'
import Dashboard from './Components/Pages/Dashboard/Dashboard'
import NavBar from './Components/Navigation/NavBar'

function App() {

  return (
    <Box>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Box>
  )
}

export default App
