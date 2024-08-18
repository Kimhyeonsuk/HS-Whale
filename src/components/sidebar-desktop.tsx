import { Sidebar } from '@/src/components/sidebar'

import { auth } from '@/src/auth'
import { ChatHistory } from '@/src/components/chat-history'

export async function SidebarDesktop() {
  const session = auth()

  if (!session?.user?.id) {
    return null
  }

  return (
    <Sidebar className="peer absolute inset-y-0 z-30 hidden -translate-x-full border-r bg-muted duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[250px] xl:w-[300px]">
      {/* @ts-ignore */}
      <ChatHistory userId={session.user.id} />
    </Sidebar>
  )
}
