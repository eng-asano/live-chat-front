'use client'

import { useAtom } from 'jotai'
import { activeNavAtom } from '@/src/store'
import { useClient, useMedia } from '@/src/hooks'
import { IconButton } from './IconButton'

interface Props {
  children: React.ReactNode
}

export const Navigation = ({ children }: Props) => {
  const [activeNav, setActiveNav] = useAtom(activeNavAtom)

  const { isClient } = useClient()

  const { isSP } = useMedia()

  if (!isClient) return <></>

  // PCまたはTabletの場合、チャット画面を常に表示する
  // SPのみユーザー画面とチャット画面を切り替えて表示する
  const isChatActive = !isSP || activeNav === 'chat'

  return (
    <nav className="flex justify-evenly mt-auto py-4 border-t border-solid border-gray-200">
      <IconButton icon="chat" isActive={isChatActive} onClick={() => setActiveNav('chat')}>
        Chat
      </IconButton>
      {children}
    </nav>
  )
}
