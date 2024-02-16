import Home from "./components/home/Home"
import Compiler from "./components/compilers/Compiler"
import { Routes, Route, Navigate } from "react-router-dom"
import Problem from "./components/problems/Problem"
import ContainerMenu from "./components/containers/ContainerMenu"
import Container from "./components/containers/Container"

const Routing = () => {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compilers" element={<Compiler />} />
        <Route path="/problems" element={<Problem />} />
        <Route path="/containers" element={<ContainerMenu />} />
        <Route path="/containers/flask" element={<Container />} />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default Routing
