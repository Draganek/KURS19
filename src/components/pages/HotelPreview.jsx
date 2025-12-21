import { useEffect, useState } from "react"
import { useParams } from "react-router"
import LoadingIcon from "../UI/LoadingIcon/LoadingIcon"
import { initHotels } from "../../reducer"

export default function HotelPreview () {
    const { id } = useParams()
    const [hotel, setHotel] = useState(null)

    useEffect(() => {

        setTimeout(() => {
            setHotel(initHotels.find(x => x.id === Number(id)))
        }, 500)
    }, [id])

    if (!hotel) return <LoadingIcon />

    return (
        <h1>Hotel: {hotel.name}</h1>
    )
}