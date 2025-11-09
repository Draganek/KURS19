import { useState, useContext } from "react"
import ThemeContext from "../../../context/ThemeContext"

export default function SearchBar(props) {
    const [value, setValue] = useState('')
    const themeContext = useContext(ThemeContext)

    const styles = { borderRadius: 8 , marginRight: 5}

    const onSearch = () => {
        props.onSearch(value)
    }

    return (
        <div className="d-flex">
            <input
                placeholder='Szukaj...'
                className='input'
                style={styles}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={event => event.code === "Enter" && onSearch()}
            />
            <button 
            className={`btn btn-${themeContext.color}`}
            onClick={onSearch}
            >Szukaj!</button>
        </div>
    )
}