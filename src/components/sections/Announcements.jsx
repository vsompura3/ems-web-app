import { useContext } from "react";
import { EMSContext } from "../../context/EMSContext";
export default function Announcements() {
  const { state } = useContext(EMSContext);
  const { userData: user } = state;
  return (
    <div>
      <h1 className="mb-16 mt-4 flex text-2xl">Announcements</h1>
      <div>
        {/* {user.annoucements.map((item) => {
          return (
            <div
              className="flex flex-row justify-between"
              key={item.announcement_id}
            >
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <div className="text-xl">{item.category_name}</div>
                  <div className="text-xl">{item.category_code}</div>
                </div>
                <div className="text-xl">{item.date}</div>
              </div>
              <div className="text-xl">{item.subject}</div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
