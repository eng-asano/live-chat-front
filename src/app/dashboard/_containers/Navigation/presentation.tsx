'use client'

import { ActiveNavAtomType } from '@/src/store'
import { useClient, useMedia } from '@/src/hooks'
import { IconButton } from '../../_components/IconButton'

interface Props {
  children: React.ReactNode
  activeNav: ActiveNavAtomType
  onClick: () => void
}

export const NavigationPresentation = ({ children, activeNav, onClick }: Props) => {
  const { isClient } = useClient()

  const { isSP } = useMedia()

  if (!isClient) return <></>

  // PCまたはTabletの場合、チャット画面を常に表示する
  // SPのみユーザー画面とチャット画面を切り替えて表示する
  const isChatActive = !isSP || activeNav === 'chat'

  return (
    <nav className="flex justify-evenly mt-auto py-4 border-t border-solid border-gray-200">
      <IconButton icon="chat" isActive={isChatActive} onClick={onClick}>
        Chat
      </IconButton>
      {children}
    </nav>
  )
}
