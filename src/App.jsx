import Navbar from "./Components/Navbar"
import Login from "./pages/Login"
import Orders from "./pages/Orders"
import Planjourney from "./pages/Planjourney"
import Profile from "./pages/Profile"
import { Route, Routes } from "react-router-dom"
import Signup from "./pages/Singup"
import Footer from "./Components/Footer"
import Homepage from "./pages/Homepage"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/plan-journey" element={<Planjourney />} />
        <Route path="/order-history" element={<Orders />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
