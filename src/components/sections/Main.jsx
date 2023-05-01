import { useContext } from "react";
import { EMSContext } from "../../context/EMSContext";
import { sayGreeting } from "../../utils/helpers";
import Overview from "./Overview";
import Announcements from "./Announcements";

export default function Main() {
  const { state } = useContext(EMSContext);
  const { userData: user } = state;
  const greeting = sayGreeting();
  return (
    <div className="border-l-2  p-6">
      <h1 className="text-2xl font-semibold text-slate-900">
        {greeting}, <span className="font-light text-brand">{user.name}</span>
      </h1>
      <h2 className="text-xl text-slate-900">Welcome to your dashboard</h2>
      <div className="overview my-8">
        <Overview />
      </div>
      <div className="announcements">
        <Announcements />
      </div>
    </div>
  );
}
