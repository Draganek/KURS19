import { useState } from "react"

export default function SearchBar(props) {
    const [value, setValue] = useState('')

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
            className="btn btn-primary"
            onClick={onSearch}
            >Szukaj!</button>
        </div>
    )
}