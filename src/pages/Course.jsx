import { useContext } from "react";
import { EMSContext } from "../context/EMSContext";

export default function Course() {
  const { state } = useContext(EMSContext);
  const { timeTable } = state;
  const course_code = Object.keys(timeTable.faculty_details);
  const course_details = Object.entries(timeTable.faculty_details);

  return (
    <div className=" p-6">
      <h1 className="text-xl font-semibold text-slate-900 ">Course Details</h1>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      Course Code
                    </th>
                    <th
                      scope="col"
                      className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      Course Title
                    </th>
                    <th
                      scope="col"
                      className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      Credits
                    </th>
                    <th
                      scope="col"
                      className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      Lectures
                    </th>
                    <th
                      scope="col"
                      className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      Practicals
                    </th>
                    <th
                      scope="col"
                      className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      Tutorials
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {course_code.map((course, i) => {
                    return (
                      <tr key={course}>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <p className="whitespace-no-wrap text-center text-gray-900">
                            {" "}
                            {course}{" "}
                          </p>
                        </td>
                        {Object.keys(course_details[0][1])
                          .filter((courseId, index) => index < 5)
                          .map((courseId) => (
                            <td
                              className="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                              key={courseId}
                            >
                              <p className="whitespace-no-wrap text-center text-gray-900">
                                {course_details[i][1][courseId] || null}
                              </p>
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
