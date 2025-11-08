import Header from '../Header/Header'
import Hotels from '../Hotels/Hotels'
import Menu from '../Menu/Menu'
import { useEffect, useState } from 'react'
import './App.css'
import LoadingIcon from '../UI/LoadingIcon/LoadingIcon'
import SearchBar from '../UI/SearchBar/SearchBar'
import Layout from '../Layout/Layout'
import Footer from '../Footer/Footer'
import ThemeButton from '../UI/ThemeButton/ThemeButton'

const initHotels = [
  {
    id: 1,
    name: 'Pod akacjami',
    city: 'Warszawa',
    rating: '8.5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://picsum.photos/id/237/300/200',
  },
  {
    id: 2,
    name: 'Dębowy',
    city: 'Lublin',
    rating: '9',
    description: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://picsum.photos/id/238/300/200',
  }
]

function App() {
  const [hotels, setHotels] = useState(initHotels)
  const [loading, setLoading] = useState(true)
  const [themeColor, setThemeColor] = useState('primary')

  useEffect(() => {
    setTimeout(() => {
      setHotels(initHotels)
      setLoading(false)
    }, 2000)
  }, [])

  const onSearch = (query) => {
    const filteredHotels = initHotels
      .filter(hotel => hotel.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    setHotels(filteredHotels)
  }

  const changeColor = () => {
    setThemeColor(themeColor === 'danger' ? 'primary' : 'danger')
  }


  return (
    <>
      <Layout
        header={<Header>
          <div className='d-flex' style={{gap: 10}}>
            <SearchBar onSearch={onSearch} themeColor={themeColor} />
            <ThemeButton onChange={changeColor}/>
          </div>
        </Header >}
        menu={<Menu />}
        content={
          loading
            ? <LoadingIcon />
            : (<Hotels hotels={hotels} themeColor={themeColor} />)
        }
        footer={<Footer themeColor={themeColor} />}
      />
    </>
  )
}

export default App
