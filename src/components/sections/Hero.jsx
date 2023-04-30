import { NavLink } from 'react-router-dom'
import hero from '../../assets/hero.jpg'

export default function Hero() {
  return (
    <div className="m-4 px-8 flex flex-col md:flex-row justify-around rounded-2xl bg-white py-4 shadow">
      <div className="content flex flex-col justify-center space-y-8">
        <div className="justify-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand">
          Enhanced Management System
        </div>
        <div className="justify-center align-middle text-lg md:text-xl">
          Tired of slow and inefficient management systems? <br />
          Well, look no further! <br />
          EMS is here to save the day!
          <div className="flex">
            <NavLink
              className=" my-6 rounded-md bg-slate-900 px-4 py-2.5 text-xl font-medium text-white hover:bg-[#8B44F6]"
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

      <img
        src={hero}
        alt="hero"
        className="md:w-1/2 self-stretch md:self-center rounded-xl"
      />
    </div>
  )
}
