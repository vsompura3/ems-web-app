'use client'
import {useState} from 'react'
import {getUserData} from '../api/userCollection/getUserData'

function LoginPanel() {
  const [loading, setLoading] = useState(false)
  const [registrationNumber, setRegistrationNumber] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleUserLogin()
  }

  const handleUserLogin = () => {}

  return (
    <form className="grid gap-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="registrationNumber"
          className="block text-lg font-medium leading-6 text-slate-900 dark:text-slate-100"
        >
          Registration Number
        </label>
        <div className="mt-2">
          <input
            id="registrationNumber"
            name="registrationNumber"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            required
            value={registrationNumber}
            onChange={e => setRegistrationNumber(e.target.value)}
            className="block w-full appearance-none rounded-md px-4 py-2.5 text-lg font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand dark:bg-slate-700 dark:text-slate-100 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-lg font-medium leading-6 text-slate-900 dark:text-slate-100"
        >
          Password
        </label>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="block w-full appearance-none rounded-md px-4 py-2.5 text-lg font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand dark:bg-slate-700 dark:text-slate-100 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <button
        className="rounded-md bg-slate-900 py-3 font-semibold text-white"
        type="submit"
      >
        {loading ? 'Signing In....' : 'Sign In'}
      </button>
    </form>
  )
}

const Login = () => {
  return (
    <div className="pt-16 text-white">
      <div className="conatiner px-6">
        <div className="mx-auto mt-24 max-w-sm md:mt-32">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
            Login to <span className="text-brand">EMS</span>
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
