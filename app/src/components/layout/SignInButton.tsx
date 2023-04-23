'use client'

import Link from 'next/link'
import {useState} from 'react'
import {Button, buttonVariants} from '../ui/Button'

const SignInButton = ({btnSize}) => {
  const [isLoading, setIsLoading] = useState(false)

  const authenticateUser = () => {
    setIsLoading(true)
    console.log('Authenticated MFers...')
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Link
      className={buttonVariants({size: btnSize ? btnSize : ''})}
      href="/login"
    >
      Sign In
    </Link>
  )
}

export default SignInButton
