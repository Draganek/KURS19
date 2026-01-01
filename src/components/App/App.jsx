import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import { lazy, Suspense, useReducer } from 'react'
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
import Search from '../pages/Search'
import NotFound from '../pages/NotFound'
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'

const ProfilePage = lazy(() => import('../pages/ProfilePage'))



function App() {
  const [localColor, setLocalColor] = useLocalStorage('themeColor', 'primary')
  const [state, dispatch] = useReducer(reducer, initState)

  const changeColor = () => { setLocalColor(localColor === 'danger' ? 'primary' : 'danger') }

  const header = (
    <Header>
      <div className='d-flex' style={{ gap: 10 }}>
        <SearchBar themeColor={localColor} />
        <ThemeButton />
      </div>
    </Header >)

  const content = (
    <Suspense fallback={'Ładowanie...'}>
      <Routes>
      <Route index element={<Home state={state} dispatch={dispatch} />} />
      <Route path='/hotel/:id' element={<HotelPreview />} />
      <Route path='/login' element={<h1>Logowanie</h1>} />
      <Route path='/register' element={<h1>Rejestracja</h1>} />
      <Route path='/search' element={<Search />} />
      <Route element={<AuthenticatedRoute />}>
        <Route path='/profile' element={<ProfilePage />} >
          <Route index element='edit' />
          <Route path='hotels' element='hotels' />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
    </Suspense>
  )

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{
        color: localColor,
        changeColor,
      }}>
        <AuthContext.Provider value={{
          isAuthenticated: !!state.user,
          logIn: () => dispatch({ type: "login" }),
          logOut: () => dispatch({ type: "logout" }),
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
