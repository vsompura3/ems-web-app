import {getUserData} from '../api/auth/login'
import LoginPanel from '../src/components/LoginPanel'

const Login = () => {
  return (
    <div className="pt-16 text-white">
      <div className="conatiner px-6">
        <div className="mx-auto mt-24 max-w-md md:mt-32">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
            Login to <span className="font-light text-brand">EMS</span>
          </h2>
          <div className="mt-12">
            <LoginPanel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
