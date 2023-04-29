import hero from "../../assets/hero.jpg";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div className="m-4 flex flex-row justify-around rounded-2xl bg-[#FFFFFF] p-4">
      <div className="content">
        <div className=" m-6 justify-center p-10 text-6xl text-[#8B44F6]">
          Enhanced Management System
        </div>
        <div className=" m-6 justify-center p-10 align-middle text-2xl">
          Tired of slow and inefficient management systems? <br />
          Well, look no further! <br />
          EMS is here to save the day!
          <div className="flex">
            <NavLink
              className="mx-6 my-6 rounded-md bg-slate-900 px-4 py-2.5 text-xl font-medium text-white hover:bg-slate-900/80"
              to="/login"
            >
              Sign In
            </NavLink>
            <NavLink
              className="mx-6 my-6 rounded-md border-2 border-slate-900 px-4 py-2.5 text-xl font-medium  hover:bg-slate-900 hover:text-white"
              to="/about"
            >
              Learn More
            </NavLink>
          </div>
        </div>
      </div>

      <img src={hero} alt="hero" className="w-1/2 self-center rounded-xl" />
    </div>
  );
}
