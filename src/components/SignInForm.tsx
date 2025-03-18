'use client'

import { useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import * as Toast from '@radix-ui/react-toast'
import { MdHighlightOff } from 'react-icons/md'
import { useActionStateCompat } from '@strozw/use-action-state-compat'
import { UserIdInput, PasswordInput, TeamCodeSelect } from '@/src/components'
import { signIn } from '@/src/actions/auth'
import { useClient } from '@/src/hooks'

export const SignInForm = () => {
  const [res, formAction, isPending] = useActionStateCompat(signIn, undefined)

  const [teamCode, setTeamCode] = useState('')
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [openToast, setOpenToast] = useState(false)
  const [error, setError] = useState<string>()

  const { isClient } = useClient()

  const closeToast = useCallback(async (open: boolean) => {
    if (open) return
    setOpenToast(false)
    await new Promise((r) => setTimeout(r, 1000))
    setError(undefined)
  }, [])

  useEffect(() => {
    if (!res?.error) return
    setError(res.error)
    setOpenToast(true)
  }, [res])

  const disabled = teamCode === '' || userId === '' || password === '' || isPending || error !== undefined

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
      {isClient &&
        createPortal(
          <Toast.Provider swipeDirection="right">
            <Toast.Root
              open={openToast}
              className="flex items-center gap-x-2 h-15 p-2 font-bold bg-white border-l-4 border-red-500 rounded-sm shadow-lg data-[state=open]:animate-toast-in data-[state=closed]:animate-toast-out"
              defaultOpen={false}
              duration={2000}
              onOpenChange={closeToast}
            >
              <MdHighlightOff size={28} className="text-red-500" />
              <Toast.Description>{error}</Toast.Description>
            </Toast.Root>
            <Toast.Viewport className="fixed bottom-5 right-5 min-w-80 z-10" />
          </Toast.Provider>,
          document.body
        )}
    </form>
  )
}
