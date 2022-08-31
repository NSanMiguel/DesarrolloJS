import { MenuDesplegable } from "./MenuDesplegable/MenuDesplegable";
import {Inicio} from "./Inicio/Inicio"
import { CartWidget } from "./CartWidget/CartWidget";
import './NavBar.css'
export function NavBar (){

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <img src="./image/solobotineslog.jpeg" className="icon"></img>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <Inicio/>
              <MenuDesplegable/>
            </ul>
          </div>
          <CartWidget/>
      </div>
    </nav>

  )
}