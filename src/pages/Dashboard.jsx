import { useContext } from "react";
import { EMSContext } from "../context/EMSContext";
import { sayGreeting } from "../utils/helpers";
import Sidebar from "../components/layout/Sidebar";
import Profile from "../components/sections/Profile";
import Main from "../components/sections/Main";

const Dashboard = () => {
  const { state } = useContext(EMSContext);
  const { userData: user } = state;
  return (
    <div className="container mx-auto flex h-full flex-1 flex-row justify-evenly">
      <div className="sidebar flex-col">
        <Sidebar />
      </div>
      <div className="main flex flex-row">
        <pre>{console.log(state)}</pre>
        <Main />
      </div>
      <div className="profile">
        <Profile />
      </div>
    </div>
  );
};

export default Dashboard;
