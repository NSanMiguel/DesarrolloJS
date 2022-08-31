export function MenuDesplegable(){
    return(
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false">Marcas</a>
          <div className="dropdown-menu bg-primary">
                <a className="dropdown-item text-white" href="#">Adidas</a>
                <a className="dropdown-item text-white" href="#">Nike</a>
                <a className="dropdown-item text-white" href="#">Puma</a>
           </div>
           </li>
    )
}