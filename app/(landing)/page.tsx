import { Button } from '@/components/ui/button'
import Link from 'next/link'

const LandingPage = () => {
  // return <p className="text-6xl text-green-500">Hello AI SaaS</p>
  return (
    <div>
      landing page (unprotected)
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>

        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
