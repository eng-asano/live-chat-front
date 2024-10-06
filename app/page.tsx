'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { UserIdInput, PasswordInput } from './components'
import { css } from '@/styled-system/css'
import { flex } from '@/styled-system/patterns'

export default function Login() {
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const goToRoomsPage = useCallback(() => {
    router.push('/rooms')
  }, [router])

  const disabled = !(userId && password)

  return (
    <div className={styles.root}>
      <section className={styles.container}>
        <div className={styles.heading}>
          <Image src="/live-chat.png" className={styles.icon} width={40} height={40} alt="Live Chat Icon" />
          <h1 className={styles.title}>Live&thinsp;Chat</h1>
        </div>
        <UserIdInput value={userId} onChange={setUserId} />
        <PasswordInput value={password} onChange={setPassword} />
        <button className={styles.signIn} disabled={disabled} onClick={goToRoomsPage}>
          Sign in
        </button>
      </section>
      <div className={styles.other}>
        <div className={styles.or}>or</div>
        <Image src="/google-icon.png" className={styles.google} width={150} height={30} alt="Sign in with Google" />
      </div>
    </div>
  )
}

const styles = {
  root: flex({
    direction: 'column',
    justify: 'center',
    rowGap: '40px',
    maxWidth: '480px',
    minWidth: '380px',
    height: '100vh',
    margin: '0 auto',
    padding: '0 24px',
  }),
  container: flex({
    direction: 'column',
    rowGap: '40px',
  }),
  heading: flex({
    justify: 'center',
    align: 'center',
    columnGap: '20px',
  }),
  icon: css({
    width: '40px',
    height: '40px',
  }),
  title: css({
    fontFamily: 'fira',
    fontSize: '3rem',
    fontWeight: '700',
    textAlign: 'center',
    color: 'primary.main',
  }),
  signIn: css({
    width: '100%',
    height: '50px',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    borderRadius: '24px',
    color: 'gray.700',
    outline: 'none',
    boxShadow: 'neumorphism.bump',
    cursor: 'pointer',
    _hover: {
      color: 'primary.main',
    },
    _focus: {
      color: 'primary.main',
    },
    _active: {
      color: 'primary.main',
      boxShadow: 'neumorphism.dent',
    },
    _disabled: {
      opacity: 0.5,
      cursor: 'auto',
      _hover: {
        color: 'gray.700',
      },
      _active: {
        boxShadow: 'neumorphism.bump',
      },
    },
  }),
  other: flex({
    direction: 'column',
    align: 'center',
    rowGap: '16px',
  }),
  or: flex({
    align: 'center',
    fontWeight: 'bold',
    width: '100%',
    color: 'gray.500',
    _before: {
      content: '""',
      width: '100%',
      height: '1px',
      marginRight: '8px',
      backgroundColor: 'gray.400',
    },
    _after: {
      content: '""',
      width: '100%',
      height: '1px',
      marginLeft: '8px',
      backgroundColor: 'gray.400',
    },
  }),
  google: css({
    width: '150px',
    height: '30px',
    cursor: 'pointer',
  }),
}
