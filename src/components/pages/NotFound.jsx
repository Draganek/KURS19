import { Link } from "react-router";

export default function NotFound() {
    return (
        <div className="p-4 text-center">
            <h1>404 - Nie ma takiej strony</h1>
            <Link to="/" className="btn btn-primary mt-3">
                Przejdź do strony głównej
            </Link>
        </div>
    )
}