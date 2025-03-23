'use client'

import { useState, useCallback, memo } from 'react'
import { MdSend } from 'react-icons/md'
import { useLiveChat, useClient, useMedia } from '@/src/hooks'
import { Snackbar } from '@/src/components/Snackbar'

interface Props {
  teamCode: string
  userId: string
}

export const MessageInput = memo(({ teamCode, userId }: Props) => {
  const [input, setInput] = useState('')
  const [lineLength, setLineLength] = useState(1)
  const [error, setError] = useState<string>()

  const { isClient } = useClient()
  const { sendContent } = useLiveChat(teamCode, userId)
  const { isSP } = useMedia()

  const sendMessage = useCallback(() => {
    const res = sendContent?.(input, 'text')

    if (res?.error) {
      setError(res.error)
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
      <Snackbar text={error} />
    </div>
  )
})

MessageInput.displayName = 'MessageInput'
