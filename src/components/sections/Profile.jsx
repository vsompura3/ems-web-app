import { useContext } from "react";
import { EMSContext } from "../../context/EMSContext";
import { AiOutlineEdit } from "react-icons/ai";

export default function Profile() {
  const { state } = useContext(EMSContext);
  const { userData: user } = state;
  return (
    <div className="mx-auto flex flex-col justify-center align-middle">
      <div className="flex flex-row justify-between">
        <h1 className="mb-16 mt-4 flex text-2xl">Profile</h1>
        <div className="my-6 flex">
          <AiOutlineEdit className=" border-2" size={26} />
        </div>
      </div>
      <div className="flex flex-col">
        <img
          src={`data:image/png;base64,${user.profile_image}`}
          className="h-52 rounded-full p-4 "
          alt=""
        />
        <div className="text-center text-xl">{user.name} </div>
        <div className=" text-center"> {user.program} </div>
        <div className=" text-center"> {user.roll_number} </div>
      </div>
      <div>
        <h1 className="mb-16 mt-4 flex text-2xl">Upcoming Classes</h1>
        <div>
          {/* {user.today_time_table.map((item) => {
            return (
              <div className="flex flex-row justify-between" key={""}>
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
      </div>
    </div>
  );
}
