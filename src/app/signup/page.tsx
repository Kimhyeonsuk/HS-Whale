import { auth } from '@/src/auth'
import SignupForm from '@/src/components/signup-form'
import { Session } from '@/src/lib/types'
import { redirect } from 'next/navigation'

export default async function SignupPage() {
  const session = (auth()) as Session

  if (session) {
    redirect('/')
  }

  return (
    <main className="flex flex-col p-4">
      <SignupForm />
    </main>
  )
}
