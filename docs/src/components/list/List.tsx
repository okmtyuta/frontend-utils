
import { classNames } from '../../classnames'
import { BaseProps } from '../types/BaseProps'
import styles from './list.module.scss'

interface ListItemProps extends BaseProps {
  indent?: boolean
}

export const ListItem = (props: ListItemProps) => {
  return <li className={`${props.className ?? ''}`}>{props.children}</li>
}

interface ListProps extends BaseProps {
  listIndent?: boolean
  itemIndent?: boolean
  listStyle?: 'none' | 'disc'
}

export const List = (props: ListProps) => {
  const classes = [styles['list']]
  if (props.listIndent) {
    classes.push(styles.indent)
  }
  if (props.listStyle === 'none') {
    classes.push('list-none')
  } else {
    classes.push(styles['list-disc'])
  }
  if (props.itemIndent) {
    classes.push(styles['item-indent'])
  }
  return <ul className={`${classNames(...classes)} ${props.className ?? ''}`}>{props.children}</ul>
}
