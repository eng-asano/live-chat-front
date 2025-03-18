import Image from 'next/image'
import { getUserInfo } from '@/src/actions/auth'
import { ThumbnailResponse } from '@/src/types/api'

export const Profile = async () => {
  const user = await getUserInfo()

  if (!user) return <></>

  return (
    <section className="flex flex-col items-center font-bold">
      <Thumbnail teamCode={user['custom:team_code']} userId={user['cognito:username']} />
      <UserName name={user.name} post={user['custom:post']} />
    </section>
  )
}

interface UserNameProps {
  name: string
  post: string
}

const UserName = ({ name, post }: UserNameProps) => {
  return (
    <>
      <h2 className="mt-4 text-lg font-bold">{name}</h2>
      <span className="mt-2">{post}</span>
    </>
  )
}

interface ThumbnailProps {
  teamCode: string
  userId: string
}

const Thumbnail = async ({ teamCode, userId }: ThumbnailProps) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE_URL}/api/thumbnails/${teamCode}`, {
    headers: {
      'X-Source': 'server',
    },
  })

  const { data } = (await res.json()) as ThumbnailResponse

  if (!data) return <></>

  return (
    <Image
      src={data[userId]}
      width={120}
      height={120}
      className="mt-4.5 border-2 border-solid border-white rounded-[50%]"
      alt="profile thumbnail"
    />
  )
}
