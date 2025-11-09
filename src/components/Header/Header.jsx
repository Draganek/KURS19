import styles from './Header.module.css'
import withMousePosition from '../../hoc/withMousePosition'

function Header(props) {
  return (
    <div className={`${styles.header}`}>
      <div>
          {props.mouseX}
          {props.children}
      </div>
    </div>
  )
}

export default withMousePosition(Header)