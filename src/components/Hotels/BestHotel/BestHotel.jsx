import moment from "moment"
import { useEffect, useState } from "react"

export default function BestHotel(props) {
    const endTime = moment().add(23,'minutes').add(5,'seconds')
    const [time, setTime] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            const leftTime = endTime.diff(moment()) / 1000
            const min = Math.floor(leftTime / 60)
            const sec = Math.floor(leftTime % 60)
            setTime(`minut: ${min}, sekund: ${sec}`)
        }, 1000)
    }, [])


    if (!props.hotel) return null

    return (
        <div className="card bg-success text-white">
            <div className="card-header">
                Najlepsza oferta!
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{props.hotel.name}</h5>
                    <p>Ocena: {props.hotel.rating}</p>
                </div>
                <p>Do końca oferty pozostało: {time}</p>
                <Link to={`/hotel/${props.hotel.id}`} className="btn btn-sm btn-light">
                    Pokaż
                </Link>
            </div>
        </div>
    )
}