import { redirect } from 'next/navigation'
import { verifyIdToken, getUserInfo, getMembersInfo } from '@/src/actions/auth'
import { Profile, Members, Navigation } from '@/src/components'
import { fira } from '@/src/utils/font'

interface Props {
  children: React.ReactNode
}

export default async function RoomsLayout({ children }: Readonly<Props>) {
  const res = await verifyIdToken()

  if (res.status === 'error') redirect('/sign-in')

  const user = await getUserInfo()
  const teamCode = user?.['custom:team_code']
  const userId = user?.['cognito:username']

  if (!teamCode || !userId) return <></>

  const members = await getMembersInfo()

  return (
    <div className="flex animate-fade-in">
      <section className="flex flex-col shrink-0 w-full min-w-80 h-dvh p-8 pb-0 text-white sm:shrink">
        <h1 className={`${fira.className} text-3xl font-bold text-center`}>Live&thinsp;Chat</h1>
        <Profile />
        <hr className="my-6 border-gray-100" />
        <h2 className="text-lg font-bold">Members</h2>
        <Members teamCode={teamCode} userId={userId} members={members} />
        <Navigation />
      </section>
      {children}
    </div>
  )
}
