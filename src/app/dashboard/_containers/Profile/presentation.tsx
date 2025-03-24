import Image from 'next/image'

interface Props {
  userName: string
  post: string
  src: string
}

export const ProfilePresentation = ({ userName, post, src }: Props) => {
  return (
    <section className="flex flex-col items-center font-bold">
      <Image
        src={src}
        width={120}
        height={120}
        className="mt-4.5 border-2 border-solid border-white rounded-[50%]"
        alt="profile thumbnail"
      />
      <h2 className="mt-4 text-lg font-bold">{userName}</h2>
      <span className="mt-2">{post}</span>
    </section>
  )
}
