import { useContext } from "react";
import { EMSContext } from "../../context/EMSContext";

export default function Timetable() {
  const { state } = useContext(EMSContext);
  const { timeTable } = state;

  const days = Object.keys(timeTable.time_table);
  const classes = Object.entries(timeTable.time_table);

  Object.keys(classes[0][1]).map((classTiming, i) => {
    console.log(classes[0][1][classTiming], i);
  });

  return (
    <div>
      <h1 className="mb-4 mt-4 flex text-2xl">Timetable</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b bg-gray-200">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      Day
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      9 - 10 AM
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      10 - 11 AM
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      11 - 12 AM
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      12 - 1 PM
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      1 - 2 PM
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      2 - 3 PM
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      3 - 4 PM
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      4 - 5 PM
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {days.map((day) => {
                    return (
                      <tr key={day}>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          {day}
                        </td>
                        {Object.keys(classes[0][1]).map((classTiming, i) => (
                          <td
                            className=" px-2 py-2 text-sm text-gray-500"
                            key={classTiming}
                          >
                            {classes[0][1][classTiming]}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}