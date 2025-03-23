import { memo } from 'react'
import { MdChat, MdLogout } from 'react-icons/md'

interface Props {
  children: React.ReactNode
  icon: 'chat' | 'sign-out'
  isActive?: boolean
  onClick?: () => void
}

export const IconButton = memo(({ children, icon, isActive, onClick }: Props) => {
  return (
    <button
      className={`flex flex-col justify-center items-center gap-y-0.5 w-21 h-13 text-xs font-bold rounded-xl ${isActive ? 'bg-primary-dark' : 'bg-primary'} hover:bg-primary-dark focus:bg-primary-dark focus:outline-none`}
      onClick={onClick}
    >
      {icon === 'chat' && <MdChat size={24} color="#fff" />}
      {icon === 'sign-out' && <MdLogout size={24} color="#fff" />}
      {children}
    </button>
  )
})

IconButton.displayName = 'IconButton'
