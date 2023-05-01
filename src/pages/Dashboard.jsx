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

const Dashboard = () => {
  const { state } = useContext(EMSContext);
  const { userData: user } = state;
  const { pathname } = useLocation();
  return (
    <div className="container mx-auto flex h-full flex-1 flex-row justify-stretch">
      <div className=" p-2">
        <Sidebar />
      </div>
      <div className="container mx-auto flex h-full flex-1 flex-row justify-between">
        {pathname === "/dashboard" && (
          <div className="flex">
            <div className="">
              <pre>{console.log(state)}</pre>
              <Main />
            </div>
            <div className="flex-wrap">
              <Profile />
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
