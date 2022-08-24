import { MenuDesplegable } from "./MenuDesplegable/MenuDesplegable";
import {Inicio} from "./Inicio/Inicio"
import { CartWidget } from "./CartWidget/CartWidget";
export function NavBar (){

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"> SOLO BOTINES </a>
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