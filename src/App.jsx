import { Routes, Route } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout.jsx"
import { useEffect, useState } from "react"
import Acceuil from "./Pages/Acceuil.jsx"
import Produits from "./Pages/Produits.jsx"

const App = () => {
  const [theme] = useState("light");

  useEffect(() => {
        document.body.className = theme;
    }, [theme]);
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Acceuil/>}/>
        <Route path="/produits" element={<Produits/>}/>
      </Route>
    </Routes>
  )
}

export default App