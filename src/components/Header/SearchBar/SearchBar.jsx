export default function SearchBar() {
    const styles = { borderRadius: 8 }
    return (
        <>
            <input
                placeholder='Szukaj...'
                className='input'
                style={styles}
            />
            <button className="button">Szukaj!</button>
        </>
    )
}