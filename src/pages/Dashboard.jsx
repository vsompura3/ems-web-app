import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import {
  getAnnouncements,
  getTimeTable,
  getUser,
  getUserAssignments,
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
  GET_ANNOUNCEMENTS,
  GET_PENDING_ASSIGNMENTS,
  GET_PLACEMENT_DRIVES,
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

  useEffect(() => {
    fetchTimeTable()
    fetchAnnouncements()
  }, [])

  const fetchTimeTable = async () => {
    setLoader(true)
    const data = await getTimeTable(
      state.userCred.registrationNumber,
      state.userCred.password,
    )
    dispatch({ type: GET_TIME_TABLE, payload: data })
    setLoader(false)
  }

  const fetchCourses = async () => {
    setLoader(true)
    const data = await getUserSyllabus(
      state.userCred.registrationNumber,
      state.userCred.password,
    )
    dispatch({ type: GET_USER_COURSE_SYLLABUS, payload: data })
    setLoader(false)
  }

  const fetchAnnouncements = async () => {
    setLoader(true)
    const data = await getAnnouncements(
      state.userCred.registrationNumber,
      state.userCred.password,
    )
    dispatch({ type: GET_ANNOUNCEMENTS, payload: data })
    setLoader(false)
  }

  const fetchAttendance = async () => {
    setLoader(true)
    const data = await getUserAttendance(
      state.userCred.registrationNumber,
      state.userCred.password,
    )
    dispatch({ type: GET_USER_ATTENDANCE, payload: data })
    setLoader(false)
  }

  const fetchAssignments = async () => {
    setLoader(true)
    const data = await getUserAssignments(
      state.userCred.registrationNumber,
      state.userCred.password,
    )
    dispatch({ type: GET_PENDING_ASSIGNMENTS, payload: data })
    setLoader(false)
  }

  const fetchPlacements = async () => {
    setLoader(true)
    const data = await getUser(
      state.userCred.registrationNumber,
      state.userCred.password,
    )
    dispatch({ type: GET_PLACEMENT_DRIVES, payload: data })
    setLoader(false)
  }

  const fetchMarks = async () => {
    setLoader(true)
    const data = await getUserMarks(
      state.userCred.registrationNumber,
      state.userCred.password,
    )
    dispatch({ type: GET_USER_MARKS, payload: data })
    setLoader(false)
  }

  return (
    <div className="container mx-auto flex h-full flex-1 flex-row justify-stretch">
      <div className=" p-2">
        <Sidebar
          loader={loader}
          fetchMarks={fetchMarks}
          fetchAttendance={fetchAttendance}
          fetchCourses={fetchCourses}
          fetchAssignments={fetchAssignments}
          fetchPlacements={fetchPlacements}
        />
      </div>
      <div className="container mx-auto flex h-full flex-1 flex-row justify-between">
        {pathname === '/dashboard' && (
          <div className="flex flex-col">
            <div className="flex flex-row justify-between gap-4">
              <div className="flex-[3]">
                <Main />
              </div>
              <div className="flex-wrap flex-[2]">
                <Profile />
              </div>
            </div>
            <div className="">
              <Timetable />
            </div>
          </div>
        )}
        {pathname === '/dashboard/assignment' && <Assignment loader={loader} />}
        {pathname === '/dashboard/courses' && <Course loader={loader} />}
        {pathname === '/dashboard/attendance' && <Attendance loader={loader} />}
        {pathname === '/dashboard/marks' && <Marks loader={loader} />}
        {pathname === '/dashboard/placement' && <Placement loader={loader} />}
      </div>
    </div>
  )
}

export default Dashboard
