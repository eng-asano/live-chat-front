'use client'

import { useAtom } from 'jotai'
import { activeNavAtom } from '@/src/store'
import { NavigationPresentation } from './presentation'

interface Props {
  children: React.ReactNode
}

export const NavigationContainer = ({ children }: Props) => {
  const [activeNav, setActiveNav] = useAtom(activeNavAtom)

  return (
    <NavigationPresentation activeNav={activeNav} onClick={() => setActiveNav('chat')}>
      {children}
    </NavigationPresentation>
  )
}
