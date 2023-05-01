import { useContext } from "react";
import { EMSContext } from "../../context/EMSContext";
import { AiOutlineEdit } from "react-icons/ai";

export default function Profile() {
  const { state } = useContext(EMSContext);
  const { userData: user, todayTimeTable } = state;

  return (
    <>
      <div className="mx-auto flex flex-1 flex-col align-middle">
        <div className="mb-4 mt-8 text-xl font-semibold text-slate-900">
          Today's Classes
        </div>
        <div className="m-5 overflow-hidden rounded-lg border border-gray-200 shadow-md">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Course Code
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Status
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Room Number
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Timing
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900"
                ></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {todayTimeTable.today_time_table.map((item) => {
                return (
                  <tr key={item.course_code} className="hover:bg-gray-50">
                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div className="text-sm">
                        <div className="font-medium text-gray-700">
                          {item.course_code}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      <span
                        className={
                          item.attendance_status === "Present"
                            ? "inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                            : item.attendance_status === "Absent"
                            ? "inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600"
                            : "inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-600"
                        }
                      >
                        <span
                          className={
                            item.attendance_status === "Present"
                              ? "h-1.5 w-1.5 rounded-full bg-green-600"
                              : item.attendance_status === "Absent"
                              ? "h-1.5 w-1.5 rounded-full bg-red-600"
                              : "h-1.5 w-1.5 rounded-full bg-yellow-600"
                          }
                        ></span>
                        {item.attendance_status}
                      </span>
                    </td>
                    <td className=" px-6 py-4">{item.room_number}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <span className="inline-flex w-20 items-center justify-center rounded-full bg-blue-50 px-1 py-1 text-xs font-semibold text-blue-600">
                          {item.timing}
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
