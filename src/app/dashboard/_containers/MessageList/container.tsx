'use client'

import { useLiveChat, useThumbnail } from '@/src/hooks'
import { Message } from '@/src/app/dashboard/_components/Message'

interface Props {
  teamCode: string
  userId: string
}

export const MessageListContainer = ({ teamCode, userId }: Props) => {
  const { messages } = useLiveChat(teamCode, userId)

  const { thumbnails } = useThumbnail(teamCode)

  return (
    <>
      {thumbnails &&
        messages?.map((m, i) => (
          <Message
            key={m.created_at}
            userId={userId}
            content={m.content}
            createdAt={m.created_at}
            memberId={m.user_id}
            prevContent={messages?.[i - 1]}
            thumbnails={thumbnails}
          />
        ))}
    </>
  )
}
