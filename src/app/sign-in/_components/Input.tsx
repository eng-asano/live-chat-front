import { MdPerson, MdLock } from 'react-icons/md'

interface Props {
  name: string
  value: string
  onChange: (v: string) => void
}

export const UserIdInput = ({ name, value, onChange }: Props) => {
  return (
    <div className="relative flex w-full h-12.5">
      <MdPerson size={24} className="absolute left-4 h-full text-gray-500" />
      <input
        type="text"
        name={name}
        value={value}
        placeholder="ID"
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-full pl-12 text-gray-600 bg-white border border-solid border-gray-300 rounded-3xl"
      />
    </div>
  )
}

export const PasswordInput = ({ name, value, onChange }: Props) => {
  return (
    <div className="relative flex w-full h-12.5">
      <MdLock size={24} className="absolute left-4 h-full text-gray-500" />
      <input
        type="password"
        name={name}
        value={value}
        placeholder="Password"
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-full pl-12 text-gray-600 bg-white border border-solid border-gray-300 rounded-3xl"
      />
    </div>
  )
}
