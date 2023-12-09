import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/Pages/LandingPage/Homepage'
import Dashboard from './Components/Pages/Dashboard/Dashboard'
import NavBar from './Components/Navigation/NavBar'
import ProfilePage from './Components/Pages/Profile/Profile'
import UploadsPage from './Components/Pages/Uploads/Uploads'
import SignUpPage from './Components/Pages/SignUp/SignUpPage'

function App() {

  return (
    <Box>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/my-uploads' element={<UploadsPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/my-uploads' element={<UploadsPage />} />
      </Routes>
    </Box>
  )
}

export default App
