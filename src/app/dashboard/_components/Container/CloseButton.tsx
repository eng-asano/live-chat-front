'use client'

import { useCallback } from 'react'
import { useAtom } from 'jotai'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { activeNavAtom } from '@/src/store'

export const CloseButton = () => {
  const [, setActiveNav] = useAtom(activeNavAtom)

  const closeChat = useCallback(() => {
    setActiveNav(undefined)
  }, [setActiveNav])

  return (
    <button onClick={closeChat}>
      <MdKeyboardArrowLeft className="text-primary" size={40} />
    </button>
  )
}
