import { useContext } from "react";
import { EMSContext } from "../context/EMSContext";
import { sayGreeting } from "../utils/helpers";

const Dashboard = () => {
  const { state } = useContext(EMSContext);
  const { userData: user } = state;
  const greeting = sayGreeting();
  return (
    <div className="m-6">
      Dashboard
      <pre>{console.log(state)}</pre>
      <h1 className="text-3xl font-semibold text-slate-900">
        {greeting}, <span className="font-light text-brand">{user.name}</span>
      </h1>
      <img src={`data:image/png;base64,${user.profile_image}`} alt="" />
    </div>
  )
}

export default Dashboard
