'use client'

import {useState} from 'react'
import {Button} from '../ui/Button'

const SignInButton = () => {
  const [isLoading, setIsLoading] = useState(false)

  const authenticateUser = () => {
    setIsLoading(true)
    console.log('authenticated')
  }

  return (
    <Button onClick={authenticateUser} isLoading={isLoading}>
      Sign In
    </Button>
  )
}

export default SignInButton
