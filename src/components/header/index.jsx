import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class="header_section">
      <div class="header_top">
        <div class="container-fluid">
          <div class="contact_nav">
            <Link to="/">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span> Call : +01 123455678990</span>
            </Link>
            <Link to="/">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span> Email : demo@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>
      <div class="header_bottom">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <Link class="navbar-brand" to="/">
              <span>Inance</span>
            </Link>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">
                    Home <span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    {" "}
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
