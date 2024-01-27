import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/LogoHouse.png";
import useAuth from "../hooks/useAuth";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const { signout, signed } = useAuth();

  const handleSignOut = () => {
    signout();

    navigate("/");
  };

  return (
    <div>
      <nav className="navbar  navbar-dark bg-dark navH ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} width="110" height="50" id="LogoHouse"></img>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">

              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link class="nav-link active" to={'/'}>Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to={'/Mpubli'}>Minhas Publicações</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to={'/sobre'}>Sobre</Link >
                </li>
              {signed ? (
                <button
                  className="btn btn-danger ms-start mb-2"
                  onClick={handleSignOut}
                >
                  <i className="bi bi-person"></i>
                  &nbsp;Sair
                </button>
              ) : (
                <Link className="Login" to="/login">
                  <i className="bi bi-person"></i>
                  &nbsp;Login
                </Link>
              )}
            </ul>
          </div>
        </div>
    </div>
      </nav >
    </div >

  )
};

export default Header;