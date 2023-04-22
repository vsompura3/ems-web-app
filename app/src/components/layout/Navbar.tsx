import {getServerSession} from 'next-auth'
import Link from 'next/link'
import {buttonVariants} from '../ui/Button'
import ThemeToggle from '../ui/ThemeToggle'
import SignInButton from './SignInButton'
import SignOutButton from './SignOutButton'

const Navbar = async () => {
  const session = await getServerSession()
  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-slate-300 bg-white/75 py-4 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="container mx-auto flex w-full items-center justify-between px-4 md:max-w-7xl">
        <Link
          href="/"
          className={buttonVariants({variant: 'link', size: 'lg'})}
        >
          Enhanced Management System
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
    </div>
  )
}

export default Navbar
