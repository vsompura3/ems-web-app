import { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import {
  getAnnouncements,
  getHostelData,
  getMakeupClasses,
  getTimeTable,
  getTodayClasses,
  getUserAttendance,
  getUserAuthorities,
  getUserData,
  getUserMarks,
} from '../api/ems-endpoints'
import LoginPanel from '../components/shared/LoginPanel'
import { EMSContext } from '../context/EMSContext'
import {
  GET_ANNOUNCEMENTS,
  GET_AUTHORITIES,
  GET_HOSTEL_DETAILS,
  GET_MAKEUP_CLASSES,
  GET_TIME_TABLE,
  GET_TODAY_TIME_TABLE,
  GET_USER_ATTENDANCE,
  GET_USER_DATA,
  GET_USER_MARKS,
  SET_USER,
} from '../context/action.types'

const Auth = () => {
  const { dispatch } = useContext(EMSContext)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [registrationNumber, setRegistrationNumber] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    if (registrationNumber && password) {
      setIsLoading(true)
      setError(false)
      dispatch({ type: SET_USER, payload: { registrationNumber, password } })
      const data1 = await getUserData(registrationNumber, password)
      const data2 = await getUserMarks(registrationNumber, password)
      const data3 = await getHostelData(registrationNumber, password)
      const data4 = await getAnnouncements(registrationNumber, password)
      const data5 = await getTimeTable(registrationNumber, password)
      const data6 = await getUserAttendance(registrationNumber, password)
      const data7 = await getUserAuthorities(registrationNumber, password)
      const data8 = await getMakeupClasses(registrationNumber, password)
      const data9 = await getTodayClasses(registrationNumber, password)
      dispatch({ type: GET_USER_DATA, payload: data1 })
      dispatch({ type: GET_USER_MARKS, payload: data2 })
      dispatch({ type: GET_HOSTEL_DETAILS, payload: data3 })
      dispatch({ type: GET_ANNOUNCEMENTS, payload: data4 })
      dispatch({ type: GET_TIME_TABLE, payload: data5 })
      dispatch({ type: GET_USER_ATTENDANCE, payload: data6 })
      dispatch({ type: GET_AUTHORITIES, payload: data7 })
      dispatch({ type: GET_MAKEUP_CLASSES, payload: data8 })
      dispatch({ type: GET_TODAY_TIME_TABLE, payload: data9 })
      setIsLoading(false)
      navigate('/dashboard')
    } else {
      setError(true)
      setIsLoading(false)
    }
  }

  return (
    <div className="py-16">
      <div className="conatiner px-6">
        <div className="mx-auto mt-24 max-w-md md:mt-32">
          <h2 className="text-3xl font-bold text-slate-900  md:text-4xl">
            Login to <span className="font-light text-brand">EMS</span>
          </h2>
          <div className="mt-12">
            <LoginPanel
              isLoading={isLoading}
              registrationNumber={registrationNumber}
              password={password}
              setRegistrationNumber={setRegistrationNumber}
              setPassword={setPassword}
              handleSubmit={handleSubmit}
            />
          </div>
          {error && <p className="text-red-700">Wrong Credentials.</p>}
        </div>
      </div>
    </div>
  )
}

export default Auth
