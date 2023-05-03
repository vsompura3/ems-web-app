import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import {
  getTimeTable,
  getUserAttendance,
  getUserMarks,
  getUserSyllabus,
} from '../api/ems-endpoints'
import Sidebar from '../components/layout/Sidebar'
import Main from '../components/sections/Main'
import Profile from '../components/sections/Profile'
import Timetable from '../components/sections/Timetable'
import { EMSContext } from '../context/EMSContext'
import {
  GET_TIME_TABLE,
  GET_USER_ATTENDANCE,
  GET_USER_COURSE_SYLLABUS,
  GET_USER_MARKS,
} from '../context/action.types'
import Assignment from './Assignment'
import Attendance from './Attendance'
import Course from './Course'
import Marks from './Marks'
import Placement from './Placement'

const Dashboard = () => {
  const { pathname } = useLocation()
  const { state, dispatch } = useContext(EMSContext)
  const [loader, setLoader] = useState(false)

  const fetchTimeTable = async () => {
    const data = await getTimeTable(
      state.userCred.registrationNumber,
      state.userCred.password,
    )
    dispatch({ type: GET_TIME_TABLE, payload: data })
  }
  useEffect(() => {
    fetchTimeTable()
  }, [])

  const fetchCourses = async () => {
    const data = await getUserSyllabus(
      state.userCred.registrationNumber,
      state.userCred.password,
    )
    dispatch({ type: GET_USER_COURSE_SYLLABUS, payload: data })
  }

  const fetchAttendance = async () => {
    const data = await getUserAttendance(
      state.userCred.registrationNumber,
      state.userCred.password,
    )
    dispatch({ type: GET_USER_ATTENDANCE, payload: data })
  }

  const fetchMarks = async () => {
    const data = await getUserMarks(
      state.userCred.registrationNumber,
      state.userCred.password,
    )
    dispatch({ type: GET_USER_MARKS, payload: data })
  }

  return (
    <div className="container mx-auto flex h-full flex-1 flex-row justify-stretch">
      <div className=" p-2">
        <Sidebar />
      </div>
      <div className="container mx-auto flex h-full flex-1 flex-row justify-between">
        {pathname === '/dashboard' && (
          <div className="flex flex-col">
            <div className="flex flex-row justify-between gap-4">
              <div className="">
                <Main />
              </div>
              <div className="flex-wrap">
                <Profile />
              </div>
            </div>
            <div className="">
              <Timetable />
            </div>
          </div>
        )}
        {pathname === '/dashboard/assignment' && <Assignment />}
        {pathname === '/dashboard/courses' && <Course />}
        {pathname === '/dashboard/attendance' && <Attendance />}
        {pathname === '/dashboard/marks' && <Marks />}
        {pathname === '/dashboard/placement' && <Placement />}
      </div>
    </div>
  )
}

export default Dashboard
