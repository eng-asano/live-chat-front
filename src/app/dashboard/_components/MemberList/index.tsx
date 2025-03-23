'use client'

import { memo } from 'react'
import { Member } from './Member'
import { useLiveChat, useThumbnail } from '@/src/hooks'
import { UserInfo } from '@/src/types/cognito'

interface MembersProps {
  teamCode: string
  userId: string
  members: UserInfo[]
}

export const MemberList = memo(({ teamCode, userId, members }: MembersProps) => {
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

  return (
    <div className="flex flex-col gap-y-8 mt-6 -mr-3 pb-3 pr-3 overflow-y-auto">
      {sortedMembers.map((m) => (
        <Member
          key={m['cognito:username']}
          info={m}
          img={thumbnails[m['cognito:username']]}
          isActive={activeUserIds.includes(m['cognito:username'])}
        />
      ))}
    </div>
  )
})

MemberList.displayName = 'MemberList'
