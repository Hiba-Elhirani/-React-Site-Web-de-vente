import { Routes, Route } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout.jsx"
import Acceuil from "./Pages/Acceuil.jsx"

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Acceuil/>}/>
      </Route>
    </Routes>
  )
}

export default App