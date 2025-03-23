'use client'

import { useState, useEffect } from 'react'
import { useActionStateCompat } from '@strozw/use-action-state-compat'
import { Snackbar } from '@/src/components'
import { UserIdInput, PasswordInput } from './Input'
import { TeamCodeSelect } from './TeamCodeSelect'
import { signIn } from '@/src/actions/auth'

export const Form = () => {
  const [res, formAction, isPending] = useActionStateCompat(signIn, undefined)

  const [teamCode, setTeamCode] = useState('')
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [openToast, setOpenToast] = useState(false)

  useEffect(() => {
    if (!res?.error) return
    setOpenToast(true)
  }, [res])

  const disabled = teamCode === '' || userId === '' || password === '' || isPending

  return (
    <form className="flex flex-col items-center gap-y-9" action={formAction}>
      <TeamCodeSelect name="teamcode" value={teamCode} onChange={setTeamCode} />
      <UserIdInput name="userid" value={userId} onChange={setUserId} />
      <PasswordInput name="password" value={password} onChange={setPassword} />
      <button
        type="submit"
        className="w-50 h-12 text-lg text-gray-500 font-bold bg-white border border-solid border-gray-200 rounded-3xl outline-none hover:text-primary focus:text-primary disabled:opacity-50 disabled:cursor-auto disabled:hover:text-gray-500"
        disabled={disabled}
      >
        Sign In
      </button>
      <Snackbar text={res?.error} open={openToast} setOpen={setOpenToast} />
    </form>
  )
}
