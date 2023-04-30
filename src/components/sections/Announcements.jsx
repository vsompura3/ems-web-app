import { useContext } from "react";
import { EMSContext } from "../../context/EMSContext";
export default function Announcements() {
  const { state } = useContext(EMSContext);
  const { announcements } = state;
  return (
    <div>
      <h1 className="mb-4 mt-4 flex text-2xl">Announcements</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Category
                    </th>{" "}
                    <th scope="col" className="px-6 py-4">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {announcements.annoucements
                    .filter((item, index) => index < 5)
                    .map((item) => {
                      return (
                        <tr
                          key={item.announcement_id}
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-slate-200"
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {item.date}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item.category_name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item.subject}
                          </td>
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
