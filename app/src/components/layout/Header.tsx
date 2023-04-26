import Image from 'next/image'
import Link from 'next/link'
import appLogo from '../../assets/ems-logo.png'

const Header = () => {
  return (
    <header className="shadow">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4 py-4 sm:justify-between md:flex-row">
          <Link href="/" className="flex items-center gap-4">
            <Image src={appLogo} alt="app logo" width={64} height={64} />
            <span className="text-lg font-bold">
              Enhanced Management System
            </span>
          </Link>
          <ul className="flex items-center gap-8">
            <li>
              <Link
                className="font-medium text-slate-900 hover:text-slate-900/90 hover:underline"
                href="/"
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-slate-900 hover:text-slate-900/90 hover:underline"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="rounded-md bg-slate-900 px-4 py-2.5 font-medium text-white hover:bg-slate-900/80"
                href="/login"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
