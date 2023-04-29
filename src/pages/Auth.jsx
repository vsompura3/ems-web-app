import { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { getUserData, getUserMarks } from '../api/ems-endpoints'
import LoginPanel from '../components/shared/LoginPanel'
import { EMSContext } from '../context/EMSContext'
import { GET_USER_DATA, GET_USER_MARKS } from '../context/action.types'

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
      const data1 = await getUserData(registrationNumber, password)
      const data2 = await getUserMarks(registrationNumber, password)
      dispatch({ type: GET_USER_DATA, payload: data1 })
      dispatch({ type: GET_USER_MARKS, payload: data2 })
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
          {error && <p className="text-red-700">Wrong Credentials....</p>}
        </div>
      </div>
    </div>
  )
}

export default Auth
