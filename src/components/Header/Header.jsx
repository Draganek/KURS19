import styles from './Header.module.css'
import SearchBar from './SearchBar/SearchBar'

export default function Header(props) {
  return (
    <div className={`${styles.header} container`}>
      <div>
          <SearchBar onSearch={props.onSearch}/>
      </div>
    </div>
  )
}
