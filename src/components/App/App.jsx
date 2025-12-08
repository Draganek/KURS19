import Header from '../Header/Header'
import Hotels from '../Hotels/Hotels'
import Menu from '../Menu/Menu'
import { useEffect, useReducer, useState } from 'react'
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
import { BrowserRouter, Route, Routes } from 'react-router'
import { initHotels, reducer, initState } from '../../reducer'



function App() {
  useWebsiteTitle('Home')
  const [hotels, setHotels] = useState(initHotels)
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

  const content = (
    <Routes>
      <Route index element={<Hotels hotels={hotels} />} />
      <Route path='/hotel/:id' element={<h1>To jest strona hotel</h1>} />
      <Route path='/login' element={<h1>Logowanie</h1>} />
      <Route path='/register' element={<h1>Rejestracja</h1>} />
    </Routes>
  )

  return (
    <BrowserRouter>
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
          content={state.loading ? <LoadingIcon /> : content}
          footer={<Footer themeColor={localColor} />}
        />
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}

export default App
