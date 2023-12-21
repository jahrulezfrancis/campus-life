import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/Pages/LandingPage/Homepage'
import Dashboard from './Components/Pages/Dashboard/Dashboard'
import NavBar from './Components/Navigation/NavBar'
import ProfilePage from './Components/Pages/Profile/Profile'
import UploadsPage from './Components/Pages/Uploads/Uploads'
import Registration from './Components/Pages/SignUp/SignUpPage'
import Login from './Components/Pages/SignIn/Login'

function App() {

  return (
    <Box>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/my-uploads' element={<UploadsPage />} />
        <Route path='/year-one' element={<UploadsPage />} />
        <Route path='/year-two' element={<UploadsPage />} />
        <Route path='/year-three' element={<UploadsPage />} />
        <Route path='/year-four' element={<UploadsPage />} />
        <Route path='/final-year' element={<UploadsPage />} />
        <Route path='/sign-up' element={<Registration />} />
        <Route path='/sign-in' element={<Login />} />
      </Routes>
    </Box>
  )
}

export default App
