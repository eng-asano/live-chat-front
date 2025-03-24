import React from 'react'
import { Snackbar } from '@/src/components/Snackbar'
import { UserIdInput, PasswordInput } from '../../_components/Input'
import { TeamCodeSelect } from '../../_components/TeamCodeSelect'

const TeamCodeSelectMemo = React.memo(TeamCodeSelect)
const UserIdInputMemo = React.memo(UserIdInput)
const PasswordInputMemo = React.memo(PasswordInput)

interface Props {
  formAction: (payload: FormData) => void
  teamCode: string
  setTeamCode: (value: string) => void
  userId: string
  setUserId: (value: string) => void
  password: string
  setPassword: (value: string) => void
  errorMessage: string | undefined
  signInDisabled: boolean
}

export const FormPresentation = ({
  formAction,
  teamCode,
  setTeamCode,
  userId,
  setUserId,
  password,
  setPassword,
  errorMessage,
  signInDisabled,
}: Props) => {
  return (
    <form className="flex flex-col items-center gap-y-9" action={formAction}>
      <TeamCodeSelectMemo name="teamcode" value={teamCode} onChange={setTeamCode} />
      <UserIdInputMemo name="userid" value={userId} onChange={setUserId} />
      <PasswordInputMemo name="password" value={password} onChange={setPassword} />
      <button
        type="submit"
        className="w-50 h-12 text-lg text-gray-500 font-bold bg-white border border-solid border-gray-200 rounded-3xl outline-none hover:text-primary focus:text-primary disabled:opacity-50 disabled:cursor-auto disabled:hover:text-gray-500"
        disabled={signInDisabled}
      >
        Sign In
      </button>
      <Snackbar text={errorMessage} />
    </form>
  )
}
