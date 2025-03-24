import { signOut } from '@/src/actions/auth'
import { IconButton } from './IconButton'

export const SignOut = () => {
  return (
    <form className="flex flex-col justify-center my-auto" action={signOut}>
      <IconButton icon="sign-out">Sign Out</IconButton>
    </form>
  )
}
