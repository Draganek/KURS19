import { useState, useContext, useRef, useEffect } from "react"
import ThemeContext from "../../../context/ThemeContext"
import useLocalStorage from "../../../hooks/useLocalStorage"

export default function SearchBar(props) {
    const [value, setValue] = useLocalStorage('query', '')
    const themeContext = useContext(ThemeContext)
    const inputRef = useRef(null)

    const styles = { borderRadius: 8 , marginRight: 5}

    const onSearch = () => {
        props.onSearch(value)
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [inputRef.current])

    return (
        <div className="d-flex">
            <input
                ref={inputRef}
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