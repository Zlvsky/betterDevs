import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button/Button'

function Header() {
  return (
    <nav className="mx-auto w-full max-w-7xl px-4 shadow-sm">
      <div className="flex h-14 items-center justify-between py-10">
        <Link className="flex items-center" href="#">
          <Image src={'/logo.svg'} alt="BetterDevs" width={200} height={100} />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden gap-4 md:flex">
          <Link
            className="flex items-center text-sm font-medium transition-colors hover:underline"
            href="#"
          >
            Home
          </Link>
          <Link
            className="flex items-center text-sm font-medium transition-colors hover:underline"
            href="#"
          >
            About
          </Link>
          <Link
            className="flex items-center text-sm font-medium transition-colors hover:underline"
            href="#"
          >
            Services
          </Link>
          <Link
            className="flex items-center text-sm font-medium transition-colors hover:underline"
            href="#"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button size="sm" variant="outline">
            Sign in
          </Button>
          <Button size="sm">Sign up</Button>
        </div>
      </div>
    </nav>
  )
}

export default Header
