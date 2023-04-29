import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import appLogo from "../../assets/ems-logo.png";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="shadow">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4 py-4 sm:justify-between md:flex-row">
          <a href="/" className="flex items-center gap-4">
            <img src={appLogo} alt="ems logo" width={64} height={64} />
            <span className="hidden text-lg font-bold sm:block">
              Enhanced Management System
            </span>
          </a>
          <ul className="flex items-center gap-8">
            <li>
              <a
                className="font-medium text-slate-900 hover:text-slate-900/90 hover:underline"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="font-medium text-slate-900 hover:text-slate-900/90 hover:underline"
                href="/about"
              >
                About
              </a>
            </li>
            {pathname === "/" ? (
              <li>
                <NavLink
                  className="rounded-md bg-slate-900 px-4 py-2.5 font-medium text-white hover:bg-slate-900/80"
                  to="/login"
                >
                  Sign In
                </NavLink>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
