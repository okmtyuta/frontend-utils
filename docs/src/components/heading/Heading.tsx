import { classNames } from '../../classnames'
import { BaseProps } from '../types/BaseProps'
import styles from './heading.module.scss'

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HeadingProps extends BaseProps {
  type?: HeadingType
  center?: boolean
}

export const Heading = (props: HeadingProps) => {
  const type = props.type ?? 'h1'
  const c = props.center ? styles['center'] : ''
  return <div className={classNames(styles[type], c)}>{props.children}</div>
}
