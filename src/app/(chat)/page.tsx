import { nanoid } from '@/src/lib/utils'
import { Chat } from '@/src/components/chat'
import { AI } from '@/src/lib/chat/actions'
import { auth } from '@/src/auth'
import { Session } from '@/src/lib/types'
import { getMissingKeys } from '@/src/app/actions'

export const metadata = {
  title: 'Next.js AI Chatbot'
}

export default async function IndexPage() {
  const id = nanoid()
  const session = (await auth()) as Session
  const missingKeys = await getMissingKeys()

  return (
    <AI initialAIState={{ chatId: id, messages: [] }}>
      <Chat id={id} session={session} missingKeys={missingKeys} />
    </AI>
  )
}
