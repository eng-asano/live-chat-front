import React from 'react'
import { MdPerson, MdLock } from 'react-icons/md'

import { css } from '@/styled-system/css'

export const UserIdInput = React.memo(() => {
  return (
    <div className={styles.root}>
      <MdPerson className={styles.icon} size={24} />
      <input type="text" className={styles.input} placeholder="User ID" />
    </div>
  )
})

UserIdInput.displayName = 'UserIdInput'

export const PasswordInput = React.memo(() => {
  return (
    <div className={styles.root}>
      <MdLock className={styles.icon} size={24} />
      <input type="password" className={styles.input} placeholder="Password" />
    </div>
  )
})

PasswordInput.displayName = 'PasswordInput'

const styles = {
  root: css({
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '50px',
  }),
  icon: css({
    position: 'absolute',
    left: '16px',
    height: 'inherit',
    color: 'gray.500',
  }),
  input: css({
    width: '100%',
    height: '100%',
    paddingLeft: '48px',
    background: 'background',
    color: 'gray.600',
    outline: 'none',
    borderRadius: '24px',
    boxShadow: 'neumorphism.dent',
  }),
}
