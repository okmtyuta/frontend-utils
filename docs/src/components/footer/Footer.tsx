import { Highlight } from '../highlight/Highlight'

import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles['footer']}>
      <div className={styles['footer-main']}>
        <div className={`${styles['copyright']}`}>
          <span className={`${styles['designed-by']}`}>Designed by</span> &nbsp; <Highlight>okmtyuta</Highlight>
        </div>
      </div>
    </div>
  )
}
