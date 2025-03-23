import { getUserInfo } from '@/src/actions/auth'
import { Container } from './_components/Container'
import { Header } from './_components/Container/Header'
import { MessageList } from './_components/MessageList'

export default async function Rooms() {
  const user = await getUserInfo()
  const teamCode = user?.['custom:team_code']
  const userId = user?.['cognito:username']

  if (!teamCode || !userId) return <></>

  return (
    <Container>
      <Header />
      <MessageList teamCode={teamCode} userId={userId} />
    </Container>
  )
}
