'use client'

import { useCallback } from 'react'
import { useAtom } from 'jotai'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { activeNavAtom } from '@/src/store'
import { Messages, MessageInput } from '@/src/components'
import { fira } from '@/src/utils/font'

interface Props {
  teamCode: string
  userId: string
}

export const Chat = ({ teamCode, userId }: Props) => {
  const [activeNav, setActiveNav] = useAtom(activeNavAtom)

  const closeChat = useCallback(() => {
    setActiveNav(undefined)
  }, [setActiveNav])

  return (
    <div
      className={`relative shrink-0 w-full bg-white transition-transform ${activeNav === 'chat' ? '-translate-x-full' : 'translate-x-full'} duration-500 ease-in-out sm:w-[calc(100%-320px)] sm:translate-x-0`}
    >
      <header className="flex items-center h-10.5 px-4 shadow-md sm:hidden sm:h-12">
        <button onClick={closeChat}>
          <MdKeyboardArrowLeft className="text-primary" size={40} />
        </button>
        <h1 className={`${fira.className} w-full mr-10 text-primary text-2xl font-bold text-center`}>
          Live&thinsp;Chat
        </h1>
      </header>
      <Messages teamCode={teamCode} userId={userId} />
      <div className="absolute top-auto right-0 bottom-0 left-0 bg-white shadow-[6px_10px_16px]">
        <div className="w-[calc(100%-64px)] max-w-320 mx-auto py-3 sm:py-6">
          <MessageInput teamCode={teamCode} userId={userId} />
        </div>
      </div>
    </div>
  )
}
