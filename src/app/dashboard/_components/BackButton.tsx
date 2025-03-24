import { MdKeyboardArrowLeft } from 'react-icons/md'

interface Props {
  onClick: () => void
}

export const BackButton = ({ onClick }: Props) => {
  return (
    <button onClick={onClick}>
      <MdKeyboardArrowLeft className="text-primary" size={40} />
    </button>
  )
}
