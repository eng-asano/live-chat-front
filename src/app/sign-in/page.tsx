import { redirect } from 'next/navigation'
import { verifyIdToken } from '@/src/actions/auth'
import { Form } from '@/src/components/SignIn/Form'
import { fira } from '@/src/utils/font'

export default async function Login() {
  const res = await verifyIdToken()
  if (res.status === 'success') redirect('/dashboard')

  return (
    <div className="flex justify-center h-full animate-fade-in">
      <section className="flex flex-col justify-center gap-y-9 w-full min-w-80 max-w-120 my-6 p-8">
        <h1 className={`${fira.className} h-10 text-5xl font-bold text-center text-white`}>Live&thinsp;Chat</h1>
        <Form />
      </section>
    </div>
  )
}
