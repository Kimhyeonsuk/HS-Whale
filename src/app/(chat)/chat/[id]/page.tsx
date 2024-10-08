import { type Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

import { auth } from '@/src/auth'
import { getChat, getMissingKeys } from '@/src/app/actions'
import { Chat } from '@/src/components/chat'
import { AI } from '@/src/lib/chat/actions'
import { Session } from '@/src/lib/types'

export interface ChatPageProps {
  params: {
    id: string
  }
}
export function generateStaticParams(): any[] {
  return [{
    params: {
      id: 'sukrrard'
    }
  }]
}

export async function generateMetadata({
  params
}: ChatPageProps): Promise<Metadata> {
  const session = auth()

  if (!session?.user) {
    return {}
  }

  const chat = await getChat(params.id, session.user.id)

  if (!chat || 'error' in chat) {
    redirect('/')
  } else {
    return {
      title: chat?.title.toString().slice(0, 50) ?? 'Chat'
    }
  }
}

export default async function ChatPage({ params }: ChatPageProps) {
  const session = (auth()) as Session
  const missingKeys = await getMissingKeys()

  if (!session?.user) {
    redirect(`/login?next=/chat/${params.id}`)
  }

  const userId = session.user.id as string
  const chat = await getChat(params.id, userId)

  if (!chat || 'error' in chat) {
    redirect('/')
  } else {
    if (chat?.userId !== session?.user?.id) {
      notFound()
    }

    return (
      <AI initialAIState={{ chatId: chat.id, messages: chat.messages }}>
        <Chat
          id={chat.id}
          session={session}
          initialMessages={chat.messages}
          missingKeys={missingKeys}
        />
      </AI>
    )
  }
}
