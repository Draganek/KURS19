import { useEffect, useState } from "react"
import useAuth from "../../../hooks/useAuth"
import { useNavigate } from "react-router"
import Button from "../../UI/Button"
import { validateEmail, validatePassword } from "../../lib/validators"

export default function Login() {
    const navigate = useNavigate()
    const [user, setUser] = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })
    const isValid = !!email && !!password && Object.values(errors).filter(x => x).length === 0

    const onSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setUser(true)
            navigate('/profile')
            setLoading(false)
        }, 500)
    }

    const getEmailClassName = () => {
        if (!email) return 'form-control'

        return `form-control ${errors.email ? 'is-invalid' : 'is-valid'}`
    }

    const getPasswordClassName = () => {
        if (!password) return 'form-control'

        return `form-control ${errors.password ? 'is-invalid' : 'is-valid'}`
    }

    useEffect(() => {
        if (validatePassword(password)) {
            setErrors(current => ({ ...current, password: ""}))
        } else {
            setErrors(current => ({ ...current, password: "Wymagane 4 znaki"}))
        }
    }, [password])

    useEffect(() => {
        if (validateEmail(email)) {
            setErrors(current => ({ ...current, email: ""}))
        } else {
            setErrors(current => ({ ...current, email: "Niepoprawny email"}))
        }
    }, [email])

    return (
        <div className="card">
            <div className="card-header">
                <form action="" className="card-body" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Login</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className={getEmailClassName()}
                            required />
                        <div className="invalid-feedback">
                            {errors.email}
                        </div>
                        <div className="valid-feedback">
                            Wszystko gra!
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Hasło</label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className={getPasswordClassName()}
                            required />
                        <div className="invalid-feedback">
                            {errors.password}
                        </div>
                        <div className="valid-feedback">
                            Wszystko gra!
                        </div>
                    </div>
                    <Button disabled={!isValid} loading={loading}>Zaloguj</Button>
                </form>
            </div>
        </div>
    )
}