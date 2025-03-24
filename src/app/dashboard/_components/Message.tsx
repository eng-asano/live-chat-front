import Image from 'next/image'
import moment from 'moment'
import { useMedia } from '@/src/hooks'
import { formatISO8601 } from '@/src/utils/data'
import { Message as MessageType } from '@/src/types'

interface ContentProps {
  userId: string
  content: string
  createdAt: string
  memberId: string
  prevContent?: MessageType
  thumbnails: { [key: string]: string }
}

export const Message = ({ content, memberId, createdAt, prevContent, userId, thumbnails }: ContentProps) => {
  const date = formatISO8601(createdAt)
  const prevData = prevContent?.created_at && formatISO8601(prevContent.created_at)

  return (
    <>
      {date !== prevData && (
        <div className="flex items-center w-full font-gray-500 break-normal before:content-[''] before:w-full before:h-0.25 before:mr-2 before:bg-gray-300 after:content-[''] after:w-full after:h-0.25 after:ml-2 after:bg-gray-300">
          <span className="shrink-0">{date}</span>
        </div>
      )}
      {memberId === userId ? (
        <UserMessage text={content} createdAt={createdAt} />
      ) : memberId === prevContent?.user_id ? (
        // 同じユーザーからの連続投稿の場合はメッセージのみ表示
        <MemberMessage text={content} createdAt={createdAt} />
      ) : (
        <ImageMessage text={content} createdAt={createdAt} thumbnail={thumbnails[memberId]} />
      )}
    </>
  )
}

interface MessageProps {
  text: string
  createdAt: string
}

const UserMessage = ({ text, createdAt }: MessageProps) => {
  const time = moment(createdAt).format('HH:mm')

  return (
    <p className="flex self-end gap-x-1 ml-8 sm:ml-15">
      <time datatype={createdAt} className="shrink-0 self-end pb-0.5 text-sm text-gray-500">
        {time}
      </time>
      <span className="flex items-center max-w-150 px-2 py-1 leading-[1.8rem] bg-[#0891b20A] rounded-12 whitespace-pre-wrap sm:px-3 sm:py-2 min-h-8">
        {text}
      </span>
    </p>
  )
}

const MemberMessage = ({ text, createdAt }: MessageProps) => {
  const time = moment(createdAt).format('HH:mm')

  return (
    <p className="flex gap-x-1 self-baseline min-h-8 mr-10 sm:mr-15">
      <span className="flex items-center max-w-150 ml-8 px-2 py-1 leading-[1.8rem] bg-[#0891b20A] rounded-12 whitespace-pre-wrap sm:ml-15 sm:px-3 sm:py-2">
        {text}
      </span>
      <time className="shrink-0 self-end pb-0.5 text-sm text-gray-500" datatype={createdAt}>
        {time}
      </time>
    </p>
  )
}

const ImageMessage = ({ text, createdAt, thumbnail }: { text: string; createdAt: string; thumbnail: string }) => {
  const { isSP } = useMedia()

  const size = isSP ? 30 : 48

  const time = moment(createdAt).format('HH:mm')

  return (
    <div className="flex gap-x-3">
      <div className="shrink-0 [&>img]:rounded-[50%]">
        <Image src={thumbnail} width={size} height={size} alt="thumbnail" />
      </div>
      <p className="flex gap-x-1 self-baseline min-h-8 mr-10 sm:mr-15">
        <span className="flex items-center px-2 py-1 text-lg leading-[1.8rem] bg-[#0891b20A] rounded-xl whitespace-pre-wrap sm:px-3 sm:py-2">
          {text}
        </span>
        <time className="shrink-0 self-end pb-0.5 text-sm text-gray-500" datatype={createdAt}>
          {time}
        </time>
      </p>
    </div>
  )
}
