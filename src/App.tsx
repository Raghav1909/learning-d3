import { Route, Routes } from "react-router-dom"
import FacePage from "./assets/pages/FacePage"
import MouseMovementPage from "./assets/pages/MouseMovementPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FacePage />} />
      <Route path="/mouse" element={<MouseMovementPage />} />
    </Routes>
  )
}
