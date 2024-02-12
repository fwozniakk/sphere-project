import Home from "./components/home/Home"
import Compiler from "./components/compilers/Compiler"
import { Routes, Route, Navigate } from "react-router-dom"

const Routing = () => {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compilers" element={<Compiler />} />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default Routing
