import { RxDashboard } from "react-icons/rx";
import { BsCalendarCheck } from "react-icons/bs";
import {
  MdOutlineAssignment,
  MdWorkOutline,
  MdTableView,
  MdSubject,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className=" flex px-10">
      <div>
        <h1 className="mb-16 mt-4 text-2xl">Dashboard</h1>
        <NavLink
          className="abuttongn-middle my-8 flex flex-row justify-center"
          to="/dashboard"
        >
          <span className="self-center px-2">
            <RxDashboard size={26} />
          </span>
          Dashboard
        </NavLink>
        <NavLink className="abuttongn-middle my-8 flex flex-row" to="/dashboard/courses">
          <span className="self-center px-2">
            <MdSubject size={26} />
          </span>
          Courses
        </NavLink>
        <NavLink
          className="abuttongn-middle my-8 flex flex-row"
          to="/dashboard/attendance"
        >
          <span className="self-center px-2">
            <BsCalendarCheck size={26} />
          </span>
          Attendance
        </NavLink>
        <NavLink
          className="abuttongn-middle my-8 flex flex-row"
          to="/dashboard/assignment"
        >
          <span className="self-center px-2">
            <MdOutlineAssignment size={26} />
          </span>
          <span> Assignment</span>
        </NavLink>
        <NavLink className="abuttongn-middle my-8 flex flex-row" to="/dashboard/marks">
          <span className="self-center px-2">
            <MdTableView size={26} />
          </span>
          Marks
        </NavLink>
        <NavLink
          className="abuttongn-middle my-8 flex flex-row"
          to="/dashboard/placement"
        >
          <span className="self-center px-2">
            <MdWorkOutline size={26} />
          </span>
          Placement
        </NavLink>
      </div>
    </div>
  );
}
