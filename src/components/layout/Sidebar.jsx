import { RxDashboard } from "react-icons/rx";
import { BsCalendarCheck } from "react-icons/bs";
import {
  MdOutlineAssignment,
  MdWorkOutline,
  MdTableView,
  MdSubject,
} from "react-icons/md";

export default function Sidebar() {
  return (
    <div className=" flex px-10">
      <div>
        <h1 className="mb-16 mt-4 text-2xl">Dashboard</h1>
        <button className="abuttongn-middle my-8 flex flex-row justify-center">
          <span className="self-center px-2">
            <RxDashboard size={26} />
          </span>
          Dashboard
        </button>
        <button className="abuttongn-middle my-8 flex flex-row">
          <span className="self-center px-2">
            <MdSubject size={26} />
          </span>
          Courses
        </button>
        <button className="abuttongn-middle my-8 flex flex-row">
          <span className="self-center px-2">
            <BsCalendarCheck size={26} />
          </span>
          Attendance
        </button>
        <button className="abuttongn-middle my-8 flex flex-row">
          <span className="self-center px-2">
            <MdOutlineAssignment size={26} />
          </span>
          Assignment
        </button>
        <button className="abuttongn-middle my-8 flex flex-row">
          <span className="self-center px-2">
            <MdTableView size={26} />
          </span>
          Marks
        </button>
        <button className="abuttongn-middle my-8 flex flex-row">
          <span className="self-center px-2">
            <MdWorkOutline size={26} />
          </span>
          Placement
        </button>
      </div>
    </div>
  );
}
