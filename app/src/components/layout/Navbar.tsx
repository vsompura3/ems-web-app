import {getSession} from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../assets/ems-logo.png'
import {Button, buttonVariants} from '../ui/Button'
import ThemeToggle from '../ui/ThemeToggle'
import SignInButton from './SignInButton'
import SignOutButton from './SignOutButton'

const Navbar = async () => {
  const session = await getSession()

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-slate-300 bg-white/75 py-4 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="container mx-auto flex w-full items-center justify-between px-4 md:max-w-7xl">
        <Link
          aria-label="ems home"
          href="/"
          className={buttonVariants({variant: 'link', size: 'lg'})}
        >
          <Image
            src={Logo}
            alt="enhanced management system"
            width={48}
            height={48}
          />
          <span aria-hidden={true} className="ml-4 hidden text-lg md:block">
            Enhanced Management System
          </span>
        </Link>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
        <div className="hidden gap-4 md:flex">
          <ThemeToggle />
          {session ? (
            <>
              <Link
                href="/dashboard"
                className={buttonVariants({variant: 'ghost'})}
              >
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
