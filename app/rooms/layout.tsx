import { flex } from '@/styled-system/patterns'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Readonly<Props>) {
  return <div className={styles.root}>{children}</div>
}

const styles = {
  root: flex({
    direction: 'column',
    justify: 'center',
    padding: '40px',
    md: {
      height: '100dvh',
    },
  }),
}
