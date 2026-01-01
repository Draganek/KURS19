import { Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function AuthenticatedRoute() {
    const [user] = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user])

    return <Outlet />

}