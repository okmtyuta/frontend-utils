import { ReactNode } from 'react'
import styles from './frame.module.scss'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'

interface FrameProps {
  children: ReactNode
  pageId: number
}

// const menuItems = [
//   {
//     id: 1,
//     label: 'Introduction',
//     to: '/',
//     active: false
//   },
//   {
//     id: 2,
//     label: 'Design Rule',
//     to: 'design-rule',
//     active: false
//   }
// ]

export const Frame = (props: FrameProps) => {
  // const activatedMenuItems = menuItems.map((menuItem) => {
  //   if (menuItem.id === props.pageId) {
  //     return {
  //       ...menuItem,
  //       active: true
  //     }
  //   }

  //   return menuItem
  // })
  return (
    <div>
      <div className={styles.frame}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={`${styles.menu} ${styles.hide}`}>{/* <Menu menuItems={activatedMenuItems} /> */}</div>
        <div className={styles.main}>
          <div>{props.children}</div>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  )
}
