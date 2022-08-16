
function navBar(){
return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <font style={{ verticalAlign: "inherit" }}>
        <font style={{ verticalAlign: "inherit" }}>SOLO BOTINES</font>
      </font>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarColor03"
      aria-controls="navbarColor03"
      aria-expanded="false"
      aria-label="Navegación de palanca"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>INICIO</font>
            </font>
          </a>
        </li>
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
)
}

export default navBar