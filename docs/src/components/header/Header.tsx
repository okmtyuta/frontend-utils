import styles from './header.module.scss'
import githubIcon from '../../material/icon/github.png'
import youtubeIcon from '../../material/icon/youtube.png'
import zennLogo from '../../material/icon/zenn-logo.svg'
import { Link } from '../link/Link'

export const Header = () => {
  return (
    <div className="sticky top-0">
      <div className={styles.header}>
        <Link to="/">
          <div className={`${styles.left}`}>okmtyuta</div>
        </Link>
        {/* <div className={styles.center}>center</div> */}
        <div className={styles.right}>
          <Link to="https://github.com/okmtyuta">
            <img className={styles['github-icon']} src={githubIcon} alt="GitHub" />
          </Link>
          <Link to="https://youtube.com/@okmtyuta">
            <img className={styles['youtube-icon']} src={youtubeIcon} alt="YouTube" />
          </Link>
          <Link to="https://zenn.dev/okmtyuta">
            <img className={styles['zenn-icon']} src={zennLogo} alt="Zenn" />
          </Link>
        </div>
      </div>
    </div>
  )
}
