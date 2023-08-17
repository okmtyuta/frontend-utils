import { ReactNode } from 'react'
import { BaseProps } from '../types/BaseProps'
import styles from './link.module.scss'

type Hover = 'underline' | 'color'
interface LinkProps extends BaseProps {
  children: ReactNode
  to: string
  hover?: Hover[]
}

export const Link = (props: LinkProps) => {
  return (
    <a className={`${styles['link']}`} href={props.to}>
      {props.children}
    </a>
  )
}
