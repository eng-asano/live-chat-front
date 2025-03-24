'use client'

import { useSetAtom } from 'jotai'
import { activeNavAtom } from '@/src/store'
import { HeaderPresentation } from './presentation'

export const HeaderContainer = () => {
  const setActiveNav = useSetAtom(activeNavAtom)

  return <HeaderPresentation onClickBack={() => setActiveNav(undefined)} />
}
