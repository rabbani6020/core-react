// External imports
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header header">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-3">
              <div className="logo">
                <Link to="/">React App</Link>
              </div>
            </div>
            <div className="col-lg-9 me-auto">
              <div className="menu-wrap">
                <ul className="menu  justify-content-end">
                  <li className="menu__item">
                    <Link to="/" className="menu__link">
                      Home
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="/about" className="menu__link">
                      About
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="/service" className="menu__link">
                      Service
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="/blog" className="menu__link">
                      Blog
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="/register" className="menu__link">
                      Register
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="/contact" className="menu__link">
                      Contact Us
                    </Link>
                  </li>
                  {/* <li className="menu__item menu__item--has-child">
                    <a href="#" className="menu__link">
                      Contact{" "}
                    </a>
                    <ul className="menu menu--sub">
                      <li className="menu__item">
                        <a href="contact.html" className="menu__link">
                          Contact
                        </a>
                      </li>
                      <li className="menu__item">
                        <a href="contact2.html" className="menu__link">
                          Contact 02
                        </a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
