import { useContext } from "react";
import { EMSContext } from "../../context/EMSContext";

export default function Profile() {
  const { state } = useContext(EMSContext);
  const { userData: user } = state;
  return (
    <div>
      <h1>Profile</h1>
      <h2>
        {" "}
        <img src={`data:image/png;base64,${user.profile_image}`} alt="" />
      </h2>
    </div>
  );
}
