import { useContext, useDebugValue } from "react"
import AuthContext from "../context/AuthContext"

export default function useAuth() {
    const authContext = useContext(AuthContext)
    const user = authContext.isAuthenticated

    useDebugValue(user ? 'Zalogowany' : 'Wylogowany')

    const setUser = (value, userData = null) => {
        if (value) {
            authContext.logIn()
            if (userData) {
                window.localStorage.setItem('user', JSON.stringify(userData))
                console.log('Zapisano dane użytkownika w localStorage')
            }
        } else {
            authContext.logOut()
            window.localStorage.removeItem('user')
            console.log('Usunięto dane użytkownika z localStorage')
        }
    }

    return [user, setUser]
}