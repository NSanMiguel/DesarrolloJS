
function navBar(){
return (
<div id="" className="">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <font style={{ verticalAlign: "inherit" }}>
        <font style={{ verticalAlign: "inherit" }}>SOLO BOTINES</font>
      </font>
    </a>
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>MARCAS</font>
            </font>
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Adidas</font>
              </font>
            </a>
            <a className="dropdown-item" href="#">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Nike</font>
              </font>
            </a>
            <a className="dropdown-item" href="#">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Puma</font>
              </font>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
)
}

export default navBar