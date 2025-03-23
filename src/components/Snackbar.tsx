import { memo } from 'react'
import { createPortal } from 'react-dom'
import { MdHighlightOff } from 'react-icons/md'
import * as Toast from '@radix-ui/react-toast'
import { useClient } from '@/src/hooks'

interface Props {
  text?: string
  open: boolean
  setOpen: (open: boolean) => void
}

export const Snackbar = memo(({ text, open, setOpen }: Props) => {
  const { isClient } = useClient()

  if (!isClient) return <></>

  return createPortal(
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        open={open}
        defaultOpen={true}
        duration={2000}
        onOpenChange={setOpen}
        className="flex items-center gap-x-2 h-15 p-2 font-bold bg-white border-l-4 border-red-500 rounded-sm shadow-lg data-[state=open]:animate-slide-in data-[state=closed]:animate-slide-out"
      >
        <MdHighlightOff size={28} className="text-red-500" />
        <Toast.Description>{text}</Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-5 right-5 min-w-80 z-10" />
    </Toast.Provider>,
    document.body
  )
})

Snackbar.displayName = 'Snackbar'
