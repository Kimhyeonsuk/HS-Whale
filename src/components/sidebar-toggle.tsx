'use client'

import * as React from 'react'

import { useSidebar } from '@/src/lib/hooks/use-sidebar'
import { Button } from '@/src/components/ui/button'
import { IconSidebar } from '@/src/components/ui/icons'

export function SidebarToggle() {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      variant="ghost"
      className="-ml-2 hidden size-9 p-0 lg:flex"
      onClick={() => {
        toggleSidebar()
      }}
    >
      <IconSidebar className="size-6" />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}
