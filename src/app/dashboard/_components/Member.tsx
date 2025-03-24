import Image from 'next/image'
import { ActivePoint } from './ActivePoint'
import { UserInfo } from '@/src/types/cognito'

interface Props {
  info: UserInfo
  img: string
  isActive: boolean
}

export const Member = ({ info, img, isActive }: Props) => {
  return (
    <div className="flex gap-x-3">
      <Image
        src={img}
        width={48}
        height={48}
        className="shrink-0 border-2 border-solid border-white rounded-[50%]"
        alt="member thumbnail"
      />
      <section className="flex flex-col gap-y-1 w-full font-bold">
        <div className="flex justify-between items-center">
          <h3>{info.name}</h3>
          <ActivePoint isActive={isActive} />
        </div>
        <span className="text-sm">{info['custom:post']}</span>
      </section>
    </div>
  )
}
