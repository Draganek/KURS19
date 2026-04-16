import { Link } from "react-router";

export default function MyHotels() {
    return (
        <div>
            <p>Nie masz jeszcze żadnych hoteli.</p>

            <Link className="btn btn-primary" to="/profile/add-hotel">Dodaj nowy hotel</Link>
        </div>
    )
}