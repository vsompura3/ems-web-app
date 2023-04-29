import { useContext } from "react";
import { EMSContext } from "../../context/EMSContext";

export default function Timetable() {
  const { state } = useContext(EMSContext);
  const { userData: user } = state;
  return (
    <div>
      <h1 className="mb-16 mt-4 flex text-2xl">Timetable</h1>
      {/* {user.timetable.time_table.map((item) => {
        return (
          <div className="flex flex-row justify-between" key={item.course_id}>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="text-xl">{item.course_name}</div>
                <div className="text-xl">{item.course_code}</div>
              </div>
              <div className="text-xl">{item.time}</div>
            </div>
            <div className="text-xl">{item.course_type}</div>
          </div>
        );
      })} */}
    </div>
  );
}
