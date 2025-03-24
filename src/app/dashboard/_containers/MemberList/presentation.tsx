'use client'

import { Member } from '../../_components/Member'
import { UserInfo } from '@/src/types/cognito'

interface MembersProps {
  activeUserIds: string[]
  thumbnails: Record<string, string>
  members: UserInfo[]
}

export const MemberListPresentation = ({ activeUserIds, thumbnails, members }: MembersProps) => {
  return (
    <div className="flex flex-col gap-y-8 mt-6 -mr-3 pb-3 pr-3 overflow-y-auto">
      {members.map((m) => (
        <Member
          key={m['cognito:username']}
          info={m}
          img={thumbnails[m['cognito:username']]}
          isActive={activeUserIds.includes(m['cognito:username'])}
        />
      ))}
    </div>
  )
}
