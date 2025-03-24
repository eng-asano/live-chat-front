'use client'

import { useAtom } from 'jotai'
import { activeNavAtom } from '@/src/store'

interface Props {
  children: React.ReactNode
}

export const Container = ({ children }: Props) => {
  const [activeNav] = useAtom(activeNavAtom)

  return (
    <div
      className={`relative shrink-0 w-full bg-white transition-transform ${activeNav === 'chat' ? '-translate-x-full' : 'translate-x-full'} duration-500 ease-in-out sm:w-[calc(100%-320px)] sm:translate-x-0`}
    >
      {children}
    </div>
  )
}
