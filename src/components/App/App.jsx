import Header from '../Header/Header'
import Hotels from '../Hotels/Hotels'
import Menu from '../Menu/Menu'
import { createContext, useEffect, useReducer, useState } from 'react'
import './App.css'
import LoadingIcon from '../UI/LoadingIcon/LoadingIcon'
import SearchBar from '../UI/SearchBar/SearchBar'
import Layout from '../Layout/Layout'
import Footer from '../Footer/Footer'
import ThemeButton from '../UI/ThemeButton/ThemeButton'
import ThemeContext from '../../context/ThemeContext'
import AuthContext from '../../context/AuthContext'
import useLocalStorage from '../../hooks/useLocalStorage'
import useWebsiteTitle from '../../hooks/useWebsiteTitle'

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

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-loading':
      return {
        ...state,
        loading: action.isLoading,
      }
    case 'login':
      return {
        ...state,
        user: true,
      }
    case 'logout': 
      return {
        ...state,
        user: false,
      }
    default:
      throw new Error(`Nie ma takiej akcji ${action.type}`)
  }
}
const initState = {
  color: 'primary',
  loading: true,
  user: null,
}

function App() {
  useWebsiteTitle('Home')
  const [hotels, setHotels] = useState(initHotels)
  //const [loading, setLoading] = useState(true)
  //const [themeColor, setThemeColor] = useState('primary')
  //const [user, setUser] = useState(null)
  const [localColor, setLocalColor] = useLocalStorage('themeColor', 'primary')

  const [state, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    setTimeout(() => {
      setHotels(initHotels)
      dispatch({type: "set-loading", isLoading: false})
    }, 2000)
  }, [])

  const onSearch = (query) => {
    const filteredHotels = initHotels
      .filter(hotel => hotel.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    setHotels(filteredHotels)
  }

  const changeColor = () => {
    setLocalColor(localColor === 'danger' ? 'primary' : 'danger')
  }

  const header = (
    <Header>
      <div className='d-flex' style={{ gap: 10 }}>
        <SearchBar onSearch={onSearch} themeColor={localColor} />
        <ThemeButton />
      </div>
    </Header >)

  const content = state.loading
    ? <LoadingIcon />
    : <Hotels hotels={hotels} themeColor={localColor} />

  return (
    <>
      <ThemeContext.Provider value={{
        color: localColor,
        changeColor,
      }}>
        <AuthContext.Provider value={{
          isAuthenticated: !!state.user,
          logIn: () => dispatch({type: "login"}),
          logOut: () => dispatch({type: "logout"}),
        }}>
        <Layout
          header={header}
          menu={<Menu />}
          content={content}
          footer={<Footer themeColor={localColor} />}
        />
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
