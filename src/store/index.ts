import { atom } from 'jotai'

export type ActiveNavAtomType = 'chat' | 'sign-out' | undefined

/** 選択中のナビゲーション */
export const activeNavAtom = atom<ActiveNavAtomType>()
