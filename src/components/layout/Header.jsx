import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { EMSContext } from "../../context/EMSContext";
import appLogo from "../../assets/ems-logo.png";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const { state } = useContext(EMSContext);
  const { userData: user } = state;
  const [status, setStatus] = useState("Sign In");

  useEffect(() => {
    if (user.registration_number > 0) {
      setStatus("Sign Out");
    } else {
      setStatus("Sign In");
    }
  }, [user]);
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
                className={
                  splitLocation[1] === ""
                    ? "abuttongn-middle my-8 flex flex-row rounded-xl font-semibold text-brand "
                    : "abuttongn-middle my-8 flex flex-row"
                }
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={
                  splitLocation[1] === "about"
                    ? "abuttongn-middle my-8 flex flex-row rounded-xl font-semibold text-brand"
                    : "abuttongn-middle my-8 flex flex-row"
                }
                href="/about"
              >
                About
              </a>
            </li>

            <li>
              <NavLink
                className="rounded-md bg-slate-900 px-4 py-2.5 font-medium text-white hover:bg-slate-900/80"
                to="/login"
              >
                {status}
              </NavLink>
            </li>

            {pathname.startsWith("/dashboard") ? (
              <ul className="flex items-center justify-center">
                <li className=" flex flex-col text-sm font-semibold">
                  {user.name ? user.name : "Please Sign In"}
                  <span className="text-right text-xs font-medium">
                    ({user.registration_number || null})
                  </span>
                </li>
                <li>
                  <img
                    src={`data:image/png;base64,${user.profile_image}`}
                    className="m-4 w-10 self-center rounded-xl"
                    alt="avatar"
                  />
                </li>
              </ul>
            ) : null}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
