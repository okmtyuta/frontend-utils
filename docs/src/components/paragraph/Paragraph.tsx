import { classNames } from '../../classnames'
import { BaseProps } from '../types/BaseProps'
import styles from './paragraph.module.scss'

interface ParagraphProps extends BaseProps {
  justify?: boolean
}

const getJustify = (justify?: boolean) => {
  if (justify) {
    return styles.justify
  }

  return ''
}

export const Paragraph = (props: ParagraphProps) => {
  return (
    <p className={`${classNames(styles.paragraph, getJustify(props.justify))} ${props.className}`}>{props.children}</p>
  )
}
