import { useContext } from 'react'
import Sidebar from '../components/layout/Sidebar'
import Main from '../components/sections/Main'
import Profile from '../components/sections/Profile'
import { EMSContext } from '../context/EMSContext'

const Dashboard = () => {
  const { state } = useContext(EMSContext)
  const { userData: user } = state
  return (
    <div className="container mx-auto flex h-full flex-1 flex-row justify-around">
      <div className="p-2">
        <Sidebar />
      </div>
      <div className="main flex flex-1 flex-row">
        <pre>{console.log(state)}</pre>
        <Main />
      </div>
      <div className="profile">
        <Profile />
      </div>
    </div>
  )
}

export default Dashboard
