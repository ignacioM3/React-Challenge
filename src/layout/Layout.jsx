import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Modal from "../pages/Modal"
import usePokemon from "../hooks/usePokemon"

const Layout = () => {
  const {activeJ, setActiveJ} = usePokemon()
  return (
    <>  
        <NavBar />
        <Outlet />
        <Footer />
        {activeJ && <Modal />}
    </>
  )
}

export default Layout