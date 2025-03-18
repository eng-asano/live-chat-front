import { atom } from 'jotai'

/** 選択中のナビゲーション */
export const activeNavAtom = atom<'chat' | 'sign-out' | undefined>()
