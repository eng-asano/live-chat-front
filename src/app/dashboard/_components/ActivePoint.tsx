interface Props {
  isActive: boolean
}

export const ActivePoint = ({ isActive }: Props) => {
  return <div className={`w-2 h-2 rounded-[50%] ${isActive ? 'bg-yellow-300' : 'bg-gray-300'}`}></div>
}
