import { getUserInfo } from '@/src/actions/auth'
import { ThumbnailResponse } from '@/src/types/api'
import { ProfilePresentation } from './presentation'

export const ProfileContainer = async () => {
  const user = await getUserInfo()
  const teamCode = user?.['custom:team_code']
  const userId = user?.['cognito:username']

  if (!teamCode || !userId) return <></>

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE_URL}/api/thumbnails/${teamCode}`, {
    headers: {
      'X-Source': 'server',
    },
  })

  const { data } = (await res.json()) as ThumbnailResponse

  if (!data) return <></>

  return <ProfilePresentation userName={user.name} post={user['custom:post']} src={data[userId]} />
}
