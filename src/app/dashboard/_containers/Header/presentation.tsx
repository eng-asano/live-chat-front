import { fira } from '@/src/utils/font'
import { BackButton } from '@/src/app/dashboard/_components/BackButton'

interface Props {
  onClickBack: () => void
}

export const HeaderPresentation = ({ onClickBack }: Props) => {
  return (
    <header className="flex items-center h-10.5 px-4 shadow-md sm:hidden sm:h-12">
      <BackButton onClick={onClickBack} />
      <h1 className={`${fira.className} w-full mr-10 text-primary text-2xl font-bold text-center`}>Live&thinsp;Chat</h1>
    </header>
  )
}
