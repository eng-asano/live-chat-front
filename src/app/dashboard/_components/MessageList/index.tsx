import { Messages } from './Messages'
import { MessageInput } from './MessageInput'

interface Props {
  teamCode: string
  userId: string
}

export const MessageList = ({ teamCode, userId }: Props) => {
  return (
    <div>
      <Messages teamCode={teamCode} userId={userId} />
      <div className="absolute top-auto right-0 bottom-0 left-0 bg-white shadow-[6px_10px_16px]">
        <div className="w-[calc(100%-64px)] max-w-320 mx-auto py-3 sm:py-6">
          <MessageInput teamCode={teamCode} userId={userId} />
        </div>
      </div>
    </div>
  )
}
