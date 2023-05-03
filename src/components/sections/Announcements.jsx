import { useContext } from "react";
import { EMSContext } from "../../context/EMSContext";
export default function Announcements() {
  const { state } = useContext(EMSContext);
  const { announcements } = state;
  return (
    <div>
      <h1 className="mb-4 mt-4 flex text-2xl">Announcements</h1>
      <div className="flex flex-col">
        <div className=" max-w-2xl">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {announcements.annoucements
              .filter((item, index) => index < 4)
              .map((item) => {
                return (
                  <li className="mb-6 ml-8" key={item.announcement_id}>
                    <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm  font-semibold leading-none text-gray-400 dark:text-gray-500">
                      {item.date}
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 ">
                      {item.category_name}
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      {item.subject}
                    </p>
                  </li>
                );
              })}
          </ol>
        </div>
      </div>
    </div>
  );
}
