import { useState } from "react";
import type { ReactElement } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type NavItem = {
  label: string;
  path: string;
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const items: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Teams", path: "/teams" },
    { label: "Blog", path: "/blog" },
  ];

  if (user !== null) {
    items.push({ label: "Create Blog", path: "/create-blog" });
  }

  function linkClass(path: string) {
    if (location.pathname === path) {
      return "rounded-md bg-neon px-3 py-2 font-semibold text-white";
    }
    return "rounded-md px-3 py-2 text-silver hover:bg-navy-700 hover:text-white";
  }

  function closeMenu() {
    setOpen(false);
  }

  async function handleLogout() {
    await logout();
    setOpen(false);
    navigate("/");
  }

  const links: ReactElement[] = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    links.push(
      <Link
        key={item.path}
        to={item.path}
        className={linkClass(item.path)}
        onClick={closeMenu}
      >
        {item.label}
      </Link>
    );
  }

  let authButton: ReactElement;
  if (user === null) {
    authButton = (
      <Link to="/login" className="btn-silver py-2" onClick={closeMenu}>
        Login
      </Link>
    );
  } else {
    authButton = (
      <button type="button" className="btn-silver py-2" onClick={handleLogout}>
        Logout
      </button>
    );
  }

  let mobileMenu: ReactElement | null = null;
  if (open === true) {
    mobileMenu = (
      <div className="flex flex-col gap-2 border-t border-navy-700 px-4 py-4 md:hidden">
        {links}
        <div className="pt-2">{authButton}</div>
      </div>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-navy-700 bg-navy-900/95">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold uppercase tracking-widest text-white"
          onClick={closeMenu}
        >
          <span className="text-silver" aria-hidden="true">
            ◆
          </span>
          Pixel<span className="text-neon-light">Vault</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links}
          <div className="ml-3">{authButton}</div>
        </div>

        <button
          type="button"
          className="rounded-md border border-silver px-3 py-2 text-silver-light md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={function () {
            setOpen(!open);
          }}
        >
          Menu
        </button>
      </nav>
      {mobileMenu}
    </header>
  );
}

export default Navbar;