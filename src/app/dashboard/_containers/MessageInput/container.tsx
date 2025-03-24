import { MessageInputPresentation } from './presentation'

interface Props {
  teamCode: string
  userId: string
}

export const MessageInputContainer = ({ teamCode, userId }: Props) => {
  return <MessageInputPresentation teamCode={teamCode} userId={userId} />
}
