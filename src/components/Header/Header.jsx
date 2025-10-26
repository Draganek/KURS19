import styles from './Header.module.css'
import SearchBar from './SearchBar/SearchBar'

export default function Header() {
  return (
    <div className={`${styles.header} container`}>
      <div>
          <SearchBar />
      </div>
    </div>
  )
}
