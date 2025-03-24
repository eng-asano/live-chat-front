'use client'

import { memo, useCallback } from 'react'
import ReactInfiniteScroll from 'react-infinite-scroll-component'
import DotLoader from 'react-spinners/DotLoader'
import { useLiveChat, useThumbnail } from '@/src/hooks'

interface Props {
  children: React.ReactNode
  teamCode: string
  userId: string
}

export const InfiniteScroll = memo(({ children, teamCode, userId }: Props) => {
  const { messages, hasMoreMessage, loadPrevMessages } = useLiveChat(teamCode, userId)

  const { thumbnails } = useThumbnail(teamCode)

  const nextMessages = useCallback(() => {
    loadPrevMessages?.()
  }, [loadPrevMessages])

  if (!thumbnails) return <></>

  return (
    <div
      id="message-scroll"
      className="flex w-full h-[calc(100vh-104px)] p-8 flex-col-reverse overflow-y-auto sm:h-[calc(100vh-90px)]"
    >
      {!messages ? (
        <div className="flex flex-col items-center justify-center gap-x-5 h-full">
          <DotLoader size={56} color="#0891b2" />
        </div>
      ) : (
        <ReactInfiniteScroll
          dataLength={messages.length}
          next={nextMessages}
          hasMore={hasMoreMessage}
          inverse={true}
          loader={undefined}
          scrollableTarget="message-scroll"
          className="relative flex flex-col-reverse w-full max-w-320 mx-auto"
        >
          <div className="flex flex-col gap-y-3 pt-2 text-gray-700 sm:gap-x-5">{children}</div>
        </ReactInfiniteScroll>
      )}
    </div>
  )
})

InfiniteScroll.displayName = 'Messages'
