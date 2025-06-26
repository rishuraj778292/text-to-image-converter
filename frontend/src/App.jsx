import Buycredit from "./pages/Buycredit"
import Home from "./pages/Home"
import Result from "./pages/Result"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import { useState } from "react"
function App() {

  const [loginPage,setloginpage]=useState(null);

  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-20 min-h-screen bg-[#151f28] text-white">
      <Navbar setloginpage={setloginpage}/>
      {loginPage&&<Login  setloginpage={setloginpage}/>}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<Buycredit />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
