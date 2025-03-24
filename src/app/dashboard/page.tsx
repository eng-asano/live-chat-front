import { getUserInfo } from '@/src/actions/auth'
import { Header } from './_containers/Header'
import { Container } from './_components/Container'
import { MessageList } from './_containers/MessageList'
import { MessageInput } from './_containers/MessageInput'
import { InfiniteScroll } from './_components/InfiniteScroll'

export default async function Rooms() {
  const user = await getUserInfo()
  const teamCode = user?.['custom:team_code']
  const userId = user?.['cognito:username']

  if (!teamCode || !userId) return <></>

  return (
    <Container>
      <Header />
      <InfiniteScroll teamCode={teamCode} userId={userId}>
        <MessageList teamCode={teamCode} userId={userId} />
      </InfiniteScroll>
      <MessageInput teamCode={teamCode} userId={userId} />
    </Container>
  )
}
