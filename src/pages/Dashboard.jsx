import { useContext } from "react";
import { EMSContext } from "../context/EMSContext";
import Sidebar from "../components/layout/Sidebar";
import Profile from "../components/sections/Profile";
import Main from "../components/sections/Main";

const Dashboard = () => {
  const { state } = useContext(EMSContext);
  const { userData: user } = state;
  return (
    <div className="container mx-auto flex h-full flex-1 flex-row justify-evenly">
      <div className=" p-2">
        <Sidebar />
      </div>
      <div className="flex-1">
        <pre>{console.log(state)}</pre>
        <Main />
      </div>
      <div className="">
        <Profile />
      </div>
    </div>
  );
};

export default Dashboard;
