import { useContext } from "react";
import Sidebar from "../components/layout/Sidebar";
import Main from "../components/sections/Main";
import Profile from "../components/sections/Profile";
import { EMSContext } from "../context/EMSContext";
import { useLocation } from "react-router";
import Assignment from "./Assignment";
import Course from "./Course";
import Attendance from "./Attendance";
import Marks from "./Marks";
import Placement from "./Placement";
import Timetable from "../components/sections/Timetable";

const Dashboard = () => {
  const { state } = useContext(EMSContext);
  const { userData } = state;
  const { pathname } = useLocation();
  return (
    <div className="container mx-auto flex h-full flex-1 flex-row justify-stretch">
      <div className=" p-2">
        <Sidebar />
      </div>
      <div className="container mx-auto flex h-full flex-1 flex-row justify-between">
        {pathname === "/dashboard" && (
          <div className="flex flex-col">
            <div className="flex flex-row justify-between gap-4">
              <div className="">
                <pre>{console.log(state)}</pre>
                <Main />
              </div>
              <div className="flex-wrap">
                <Profile />
              </div>
            </div>
            <div className="">
              <Timetable />
            </div>
          </div>
        )}
        {pathname === "/dashboard/assignment" && <Assignment />}
        {pathname === "/dashboard/courses" && <Course />}
        {pathname === "/dashboard/attendance" && <Attendance />}
        {pathname === "/dashboard/marks" && <Marks />}
        {pathname === "/dashboard/placement" && <Placement />}
      </div>
    </div>
  );
};

export default Dashboard;
