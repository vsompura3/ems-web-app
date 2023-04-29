import { useContext } from "react";
import { EMSContext } from "../../context/EMSContext";
import { sayGreeting } from "../../utils/helpers";

export default function Main() {
  const { state } = useContext(EMSContext);
  const { userData: user } = state;
  const greeting = sayGreeting();
  return (
    <div>
      <h1 className="text-3xl font-semibold text-slate-900">
        {greeting}, <span className="font-light text-brand">{user.name}</span>
      </h1>
    </div>
  );
}
