import { useContext } from 'react'
import { EMSContext } from '../../context/EMSContext'

export default function Timetable() {
  const { state } = useContext(EMSContext)
  const { timeTable } = state

  const days = Object.keys(timeTable.time_table)
  const classes = Object.entries(timeTable.time_table)

  return (
    <div>
      <h2 className="mb-4 mt-4 flex text-2xl">Timetable</h2>
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
                      Day
                    </th>
                    <th
                      scope="col"
                      className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      9 - 10 AM
                    </th>
                    <th
                      scope="col"
                      className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      10 - 11 AM
                    </th>
                    <th
                      scope="col"
                      className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      11 - 12 AM
                    </th>
                    <th
                      scope="col"
                      className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      12 - 1 PM
                    </th>
                    <th
                      scope="col"
                      className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      1 - 2 PM
                    </th>
                    <th
                      scope="col"
                      className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      2 - 3 PM
                    </th>
                    <th
                      scope="col"
                      className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      3 - 4 PM
                    </th>
                    <th
                      scope="col"
                      className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      4 - 5 PM
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {days.map((day, i) => {
                    return (
                      <tr key={day}>
                        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                          <p className="whitespace-no-wrap text-center text-gray-900">
                            {' '}
                            {day}{' '}
                          </p>
                        </td>
                        {Object.keys(classes[0][1]).map(classTiming => (
                          <td
                            className="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                            key={classTiming}
                          >
                            <p className="whitespace-no-wrap text-center text-gray-900">
                              {' '}
                              {classes[i][1][classTiming] || 'Free Period'}{' '}
                            </p>
                          </td>
                        ))}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
