import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import { useReducer } from 'react'
import './App.css'
import SearchBar from '../UI/SearchBar/SearchBar'
import Layout from '../Layout/Layout'
import Footer from '../Footer/Footer'
import ThemeButton from '../UI/ThemeButton/ThemeButton'
import ThemeContext from '../../context/ThemeContext'
import AuthContext from '../../context/AuthContext'
import useLocalStorage from '../../hooks/useLocalStorage'
import { BrowserRouter, Route, Routes } from 'react-router'
import { reducer, initState } from '../../reducer'
import Home from '../pages/Home'
import HotelPreview from '../pages/HotelPreview'



function App() {
  const [localColor, setLocalColor] = useLocalStorage('themeColor', 'primary')
  const [state, dispatch] = useReducer(reducer, initState)

  const onSearch = (query) => {
    const filteredHotels = state.hotels
      .filter(hotel => hotel.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    dispatch({type: 'set-visible-hotels', hotels: filteredHotels})
  }

  const changeColor = () => {setLocalColor(localColor === 'danger' ? 'primary' : 'danger')}

  const header = (
    <Header>
      <div className='d-flex' style={{ gap: 10 }}>
        <SearchBar onSearch={onSearch} themeColor={localColor} />
        <ThemeButton />
      </div>
    </Header >)

  const content = (
    <Routes>
      <Route index element={<Home state={state} dispatch={dispatch}/>} />
      <Route path='/hotel/:id' element={<HotelPreview />} />
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
          content={content}
          footer={<Footer themeColor={localColor} />}
        />
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}

export default App
