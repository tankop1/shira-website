import { Link, Outlet, useLocation } from "react-router-dom";
import "./Layout.css";
import PageLink from "../components/PageLink";

import Logo from "../assets/Shira Logo.png";
import Button from "../components/Button";
import { useEffect, useRef } from "react";

function Layout() {
  const location = useLocation();
  const lastScrollY = useRef(window.scrollY);
  const headerRef = useRef<HTMLHeadElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const header = headerRef.current;
      if (!header) return;
      if (currentScrollY === 0 || currentScrollY < lastScrollY.current) {
        // Scrolling up or at top
        header.classList.remove("header-hidden");
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        header.classList.add("header-hidden");
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="layout">
      <header
        ref={headerRef}
        className={
          `${location.pathname !== "/" ? "header-border" : ""}` +
          (headerRef.current &&
          headerRef.current.classList.contains("header-hidden")
            ? " header-hidden"
            : "")
        }
      >
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
              <PageLink path="/about" focused={location.pathname === "/about"}>
                About
              </PageLink>
            </li>
            <li>
              <PageLink path="/color" focused={location.pathname === "/color"}>
                Color
              </PageLink>
            </li>
            <li>
              <PageLink path="/films" focused={location.pathname === "/films"}>
                Films
              </PageLink>
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
