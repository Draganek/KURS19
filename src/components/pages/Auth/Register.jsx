import Button from "../../UI/Button";
import Input from "../../UI/Input/Input";
import { validate } from "../../lib/validators";
import { useState } from "react";
import axiosAuth from "../../../axiosAuth"
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router";

export default function Register() {
    const navigate = useNavigate()
    const [user, setUser] = useAuth()
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const emailError = validate(['required', 'email'], email)
    const passError = validate(['required'], password)
    const isValid = !emailError && !passError

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await axiosAuth.post('/accounts:signUp', {
                email,
                password,
                returnSecureToken: true
            })

            setUser(true, res.data)
            navigate('/profile')

        } catch (err) {
            setLoading(false)
            setError(err.response.data.error.message)
            console.log(err.response.data.error.message)
        }
        setLoading(false)
    }
    return (
        <div className="card">
            <div className="card-header">Rejestracja</div>
            <form className="card-body" onSubmit={onSubmit}>
                <Input label="Email"
                    value={email}
                    onChange={setEmail}
                    error={emailError}
                />
                <Input label="Hasło" type="password"
                    value={password}
                    onChange={setPassword}
                    error={passError}
                />
                {error && <div className="alert alert-danger">{error}</div>}
                <Button disabled={!isValid} loading={loading}>Zarejestruj!</Button>
            </form>
        </div>
    )
}