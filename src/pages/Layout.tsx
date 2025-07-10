import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import PageLink from "../components/PageLink";

import Logo from "../assets/Shira Logo.png";
import Button from "../components/Button";

function Layout() {
  return (
    <div id="layout">
      <header>
        <Link
          style={{ textDecoration: "none", color: "var(--text-color)" }}
          to="/"
        >
          <div id="logo-left">
            <img src={Logo} alt="Logo" id="logo" />

            <div id="logo-text">
              <h3>Shira Chait</h3>
              <h6>Director. Colorist. Filmmaker.</h6>
            </div>
          </div>
        </Link>

        <nav>
          <ul>
            <li>
              <PageLink path="/about">About</PageLink>
            </li>
            <li>
              <PageLink path="/color">Color</PageLink>
            </li>
            <li>
              <PageLink path="/films">Films</PageLink>
            </li>
            <li>
              <Link to="/contact">
                <Button>Contact</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div id="header-placeholder"></div>

      <Outlet />
    </div>
  );
}

export default Layout;
