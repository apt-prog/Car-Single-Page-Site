const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i
              className="bi bi-car-front"
              style={{
                fontSize: "2rem",
                marginRight: "8px",
                verticalAlign: "middle",
                color: "#0056b3",
              }}
            ></i>
            CarSite's
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="LinkMain">
              <i className="bi bi-list" style={{ fontSize: "30x" , top:"29px" , right:"30px" , position:"absolute" ,  }}></i>
            </div>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#Inventory">
                  Inventory
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
