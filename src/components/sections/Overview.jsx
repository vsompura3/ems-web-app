import { useContext } from "react";
import { EMSContext } from "../../context/EMSContext";
export default function Overview() {
  const { state } = useContext(EMSContext);
  const { userData: user } = state;
  return (
    <div>
      <h1 className="text-xl font-semibold text-slate-900 ">Overview</h1>
      <div className="flex flex-row">
        <div className="card m-4 w-40 rounded-xl bg-red-100 p-4">
          <div className="card-header">
            <h2 className=" font-semibold text-slate-900">Attendance</h2>
          </div>
          <div className="card-body">
            <h3 className="text-2xl text-slate-900">{user.agg_attendance}%</h3>
          </div>
        </div>
        <div className="card m-4 w-40 rounded-xl bg-orange-100 p-4">
          <div className="card-header">
            <h2 className=" font-semibold text-slate-900">Grade (CGPA)</h2>
          </div>
          <div className="card-body">
            <h3 className="text-2xl text-slate-900">{user.cgpa}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
