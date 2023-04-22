'use client'

import {useState} from 'react'
import {Button} from '../ui/Button'

const SignOutButton = () => {
  const [isLoading, setIsLoading] = useState(false)

  const authenticateUser = () => {
    setIsLoading(true)
    console.log('logged out')
  }

  return (
    <Button onClick={authenticateUser} isLoading={isLoading}>
      Sign out
    </Button>
  )
}

export default SignOutButton
