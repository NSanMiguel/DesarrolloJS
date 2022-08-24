export function MenuDesplegable(){
    return(
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false">Marcas</a>
          <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Adidas</a>
                <a className="dropdown-item" href="#">Nike</a>
                <a className="dropdown-item" href="#">Puma</a>
           </div>
           </li>
    )
}