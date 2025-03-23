'use client'

import { useState } from 'react'
import { useActionStateCompat } from '@strozw/use-action-state-compat'
import { signIn } from '@/src/actions/auth'
import { FormPresentation } from './presentation'

export const FormContainer = () => {
  const [res, formAction, isPending] = useActionStateCompat(signIn, undefined)

  const [teamCode, setTeamCode] = useState('')
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  const disabled = teamCode === '' || userId === '' || password === '' || isPending

  return (
    <FormPresentation
      formAction={formAction}
      teamCode={teamCode}
      setTeamCode={setTeamCode}
      userId={userId}
      setUserId={setUserId}
      password={password}
      setPassword={setPassword}
      errorMessage={res?.error}
      signInDisabled={disabled}
    />
  )
}
