import { redirect } from 'next/navigation'
import { verifyIdToken, getUserInfo, getMembersInfo } from '@/src/actions/auth'
import { MemberList } from './_containers/MemberList'
import { Profile } from './_containers/Profile'
import { Navigation } from './_containers/Navigation'
import { SignOut } from './_components/SignOut'
import { fira } from '@/src/utils/font'

interface Props {
  children: React.ReactNode
}

export default async function RoomsLayout({ children }: Readonly<Props>) {
  const res = await verifyIdToken()

  if (res.status === 'error') redirect('/sign-in')

  const userPromise = getUserInfo()
  const membersPromise = getMembersInfo()

  const [user, members] = await Promise.all([userPromise, membersPromise])

  const teamCode = user?.['custom:team_code']
  const userId = user?.['cognito:username']

  return (
    <div className="flex animate-fade-in">
      <section className="flex flex-col shrink-0 w-full min-w-80 h-dvh p-8 pb-0 text-white sm:shrink">
        <h1 className={`${fira.className} text-3xl font-bold text-center`}>Live&thinsp;Chat</h1>
        <Profile />
        <hr className="my-6 border-gray-100" />
        <h2 className="text-lg font-bold">Members</h2>
        {teamCode && userId && <MemberList teamCode={teamCode} userId={userId} members={members} />}
        <Navigation>
          <SignOut />
        </Navigation>
      </section>
      {children}
    </div>
  )
}
