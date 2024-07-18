import { Link } from "react-router-dom"
import Cartwidget from "../CartWidget/Cartwidget"

function NavBar() {
  return (
    <nav>
        <h1>Ecommerce Plants</h1>
        <section>
            <Link to="/category/calathea">Calathea </Link>
            <Link to="/category/flor">Flor </Link>
            <Link to="/category/aromaticas">Aromaticas </Link>
            <Link to="/">Todas </Link>
            <Cartwidget/>
        </section>
    </nav>
  )
}

export default NavBar