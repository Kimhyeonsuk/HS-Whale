import { auth } from '@/src/auth'
import LoginForm from '@/src/components/login-form'
import { Session } from '@/src/lib/types'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  const session = (auth()) as Session

  if (session) {
    redirect('/')
  }

  return (
    <main className="flex flex-col p-4">
      <LoginForm />
    </main>
  )
}
