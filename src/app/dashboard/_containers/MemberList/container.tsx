'use client'

import { useLiveChat, useThumbnail } from '@/src/hooks'
import { UserInfo } from '@/src/types/cognito'
import { MemberListPresentation } from './presentation'

interface MembersProps {
  teamCode: string
  userId: string
  members: UserInfo[]
}

export const MemberListContainer = ({ teamCode, userId, members }: MembersProps) => {
  const { activeUserIds } = useLiveChat(teamCode, userId)

  const { thumbnails } = useThumbnail(teamCode)

  // 条件： アクティブ状態 > team_codeの昇順
  const sortedMembers = members.sort((a, b) => {
    const aIsActive = activeUserIds.includes(a['cognito:username'])
    if (aIsActive) return -1

    const bIsActive = activeUserIds.includes(b['cognito:username'])
    if (bIsActive) return 1

    return a['cognito:username'].localeCompare(b['cognito:username'])
  })

  if (!thumbnails) return <></>

  return <MemberListPresentation activeUserIds={activeUserIds} thumbnails={thumbnails} members={sortedMembers} />
}
