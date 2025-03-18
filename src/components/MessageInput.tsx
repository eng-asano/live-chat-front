'use client'

import { useState, useCallback, memo } from 'react'
import { createPortal } from 'react-dom'
import { MdSend, MdHighlightOff } from 'react-icons/md'
import * as Toast from '@radix-ui/react-toast'
import { useLiveChat, useClient, useMedia } from '@/src/hooks'

interface Props {
  teamCode: string
  userId: string
}

export const MessageInput = memo(({ teamCode, userId }: Props) => {
  const [input, setInput] = useState('')
  const [lineLength, setLineLength] = useState(1)
  const [openToast, setOpenToast] = useState(false)
  const [error, setError] = useState<string>()

  const { isClient } = useClient()
  const { sendContent } = useLiveChat(teamCode, userId)
  const { isSP } = useMedia()

  const sendMessage = useCallback(() => {
    const res = sendContent?.(input, 'text')

    if (res?.error) {
      setError(res.error)
      setOpenToast(true)
      return
    }

    setInput('')
    setLineLength(1)
  }, [input, sendContent])

  const changeInput = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    const lines = value.split(/\r?\n/)

    setInput(value)
    if (lines.length < 6) setLineLength(lines.length)
  }, [])

  const closeToast = useCallback(async (open: boolean) => {
    if (open) return
    setOpenToast(false)
    await new Promise((r) => setTimeout(r, 1000))
    setError(undefined)
  }, [])

  if (!isClient) return <></>

  const baseHeight = isSP ? 36 : 42

  return (
    <div className="flex">
      <textarea
        className="resize-none w-full p-2 text-lg leading-[1.6rem] bg-gray-100 rounded-l outline-none overflow-hidden sm:p-3 sm:leading-[1.5rem]"
        style={{ height: baseHeight + 14 * (lineLength - 1) }}
        value={input}
        onChange={changeInput}
        placeholder="Send a message"
      />
      <button
        disabled={input.trim() === ''}
        className="p-1.5 bg-gray-100 rounded-l outline-primary sm:p-2 [&>svg]:text-primary disabled:[&>svg]:text-gray-400"
      >
        <MdSend size={24} onClick={sendMessage} />
      </button>
      {isClient &&
        createPortal(
          <Toast.Provider swipeDirection="right">
            <Toast.Root
              open={openToast}
              defaultOpen={false}
              duration={2000}
              onOpenChange={closeToast}
              className="flex items-center gap-x-2 h-15 p-2 font-bold bg-white border-l-4 border-red-500 rounded-sm shadow-lg data-[state=open]:animate-toast-in data-[state=closed]:animate-toast-out"
            >
              <MdHighlightOff size={28} className="text-red-500" />
              <Toast.Description>{error}</Toast.Description>
            </Toast.Root>
            <Toast.Viewport className="fixed bottom-5 right-5 min-w-80 z-10" />
          </Toast.Provider>,
          document.body
        )}
    </div>
  )
})

MessageInput.displayName = 'MessageInput'
