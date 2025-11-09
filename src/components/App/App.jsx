import Header from '../Header/Header'
import Hotels from '../Hotels/Hotels'
import Menu from '../Menu/Menu'
import { createContext, useEffect, useState } from 'react'
import './App.css'
import LoadingIcon from '../UI/LoadingIcon/LoadingIcon'
import SearchBar from '../UI/SearchBar/SearchBar'
import Layout from '../Layout/Layout'
import Footer from '../Footer/Footer'
import ThemeButton from '../UI/ThemeButton/ThemeButton'
import ThemeContext from '../../context/ThemeContext'
import AuthContext from '../../context/AuthContext'

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
  const [user, setUser] = useState(null)

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

  const header = (
    <Header>
      <div className='d-flex' style={{ gap: 10 }}>
        <SearchBar onSearch={onSearch} themeColor={themeColor} />
        <ThemeButton />
      </div>
    </Header >)

  const content = loading
    ? <LoadingIcon />
    : <Hotels hotels={hotels} themeColor={themeColor} />

  return (
    <>
      <ThemeContext.Provider value={{
        color: themeColor,
        changeColor,
      }}>
        <AuthContext.Provider value={{
          isAuthenticated: !!user,
          logIn: () => setUser(true),
          logOut: () => setUser(null),
        }}>
        <Layout
          header={header}
          menu={<Menu />}
          content={content}
          footer={<Footer themeColor={themeColor} />}
        />
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
