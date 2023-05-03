import { BsCalendarCheck } from 'react-icons/bs'
import {
  MdOutlineAssignment,
  MdSubject,
  MdTableView,
  MdWorkOutline,
} from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'
import { NavLink, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')

  return (
    <div className=" flex px-10">
      <div>
        <h1 className="mb-16 mt-4 text-2xl">Dashboard</h1>
        <NavLink
          className={
            splitLocation[2] === undefined
              ? 'abuttongn-middle my-8 flex flex-row items-center rounded-xl bg-blue-500 p-4 text-white'
              : 'abuttongn-middle my-8 flex flex-row items-center px-4'
          }
          to="/dashboard"
        >
          <span className="self-center px-2">
            <RxDashboard size={26} />
          </span>
          Dashboard
        </NavLink>
        <NavLink
          className={
            splitLocation[2] === 'courses'
              ? 'abuttongn-middle my-8 flex flex-row items-center rounded-xl bg-blue-500 p-4 text-white'
              : 'abuttongn-middle my-8 flex flex-row items-center px-4'
          }
          to="/dashboard/courses"
        >
          <span className="self-center px-2">
            <MdSubject size={26} />
          </span>
          Courses
        </NavLink>
        <NavLink
          className={
            splitLocation[2] === 'attendance'
              ? 'abuttongn-middle my-8 flex flex-row items-center rounded-xl bg-blue-500 p-4 text-white'
              : 'abuttongn-middle my-8 flex flex-row items-center px-4'
          }
          to="/dashboard/attendance"
        >
          <span className="self-center px-2">
            <BsCalendarCheck size={26} />
          </span>
          Attendance
        </NavLink>
        <NavLink
          className={
            splitLocation[2] === 'assignment'
              ? 'abuttongn-middle my-8 flex flex-row items-center rounded-xl bg-blue-500 p-4 text-white'
              : 'abuttongn-middle my-8 flex flex-row items-center px-4'
          }
          to="/dashboard/assignment"
        >
          <span className="self-center px-2">
            <MdOutlineAssignment size={26} />
          </span>
          <span> Assignment</span>
        </NavLink>
        <NavLink
          className={
            splitLocation[2] === 'marks'
              ? 'abuttongn-middle my-8 flex flex-row items-center rounded-xl bg-blue-500 p-4 text-white'
              : 'abuttongn-middle my-8 flex flex-row items-center px-4'
          }
          to="/dashboard/marks"
        >
          <span className="self-center px-2">
            <MdTableView size={26} />
          </span>
          Marks
        </NavLink>
        <NavLink
          className={
            splitLocation[2] === 'placement'
              ? 'abuttongn-middle my-8 flex flex-row items-center rounded-xl bg-blue-500 p-4 text-white'
              : 'abuttongn-middle my-8 flex flex-row items-center px-4'
          }
          to="/dashboard/placement"
        >
          <span className="self-center px-2">
            <MdWorkOutline size={26} />
          </span>
          Placement
        </NavLink>
      </div>
    </div>
  )
}
