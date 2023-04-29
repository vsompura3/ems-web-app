import { useContext } from 'react'
import { EMSContext } from '../context/EMSContext'
import { sayGreeting } from '../utils/helpers'

const Dashboard = () => {
  const { state } = useContext(EMSContext)
  const { userData: user } = state
  const greeting = sayGreeting()
  console.log(sayGreeting)
  return (
    <div>
      Dashboard
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <h1 className="text-3xl font-semibold text-slate-900">
        {greeting}, <span className="font-light text-brand">{user.name}</span>
      </h1>
      <img src={`data:image/png;base64,${user.profile_image}`} alt="" />
    </div>
  )
}

export default Dashboard
