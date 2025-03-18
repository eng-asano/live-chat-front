'use client'

import { memo } from 'react'
import Image from 'next/image'
import { ActivePoint } from '@/src/components'
import { useLiveChat, useThumbnail } from '@/src/hooks'
import { UserInfo } from '@/src/types/cognito'

interface MembersProps {
  teamCode: string
  userId: string
  members: UserInfo[]
}

export const Members = memo(({ teamCode, userId, members }: MembersProps) => {
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

Members.displayName = 'Members'

interface MemberProps {
  info: UserInfo
  img: string
  isActive: boolean
}

const Member = ({ info, img, isActive }: MemberProps) => {
  return (
    <div className="flex gap-x-3">
      <Image
        src={img}
        width={48}
        height={48}
        className="shrink-0 border-2 border-solid border-white rounded-[50%]"
        alt="member thumbnail"
      />
      <section className="flex flex-col gap-y-1 w-full font-bold">
        <div className="flex justify-between items-center">
          <h3>{info.name}</h3>
          <ActivePoint isActive={isActive} />
        </div>
        <span className="text-sm">{info['custom:post']}</span>
      </section>
    </div>
  )
}
