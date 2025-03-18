'use client'

import { useCallback } from 'react'
import { useAtom } from 'jotai'
import { activeNavAtom } from '@/src/store'
import { signOut } from '@/src/actions/auth'
import { useClient, useMedia } from '@/src/hooks'
import { IconButton } from '@/src/components'

export const Navigation = () => {
  const [activeNav, setActiveNav] = useAtom(activeNavAtom)

  const { isClient } = useClient()

  const { isSP } = useMedia()

  const switchToChat = useCallback(() => {
    setActiveNav('chat')
  }, [setActiveNav])

  if (!isClient) return <></>

  // PCまたはTabletの場合、チャット画面を常に表示する
  // SPのみユーザー画面とチャット画面を切り替えて表示する
  const isChatActive = !isSP || activeNav === 'chat'

  return (
    <nav className="flex justify-evenly mt-auto py-4 border-t border-solid border-gray-200">
      <IconButton icon="chat" isActive={isChatActive} onClick={switchToChat}>
        Chat
      </IconButton>
      <form className="flex flex-col justify-center my-auto" action={signOut}>
        <IconButton icon="sign-out">Sign Out</IconButton>
      </form>
    </nav>
  )
}
