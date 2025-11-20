import { useCallback } from "react";
import BestHotel from "./BestHotel/BestHotel";
import Hotel from "./Hotel/Hotel";

export default function Hotels(props) {

    const count = props.hotels.length
    const bestHotel = count > 1 
    ? [...props.hotels].sort((a,b) => a.rating - b.rating ? -1 : 1)[0]
    : null

    const showBestHotel = useCallback((hotel) => {
        console.log(hotel)
    }, [])

    return (
        <div>
            {bestHotel && <BestHotel hotel={bestHotel} onShow={showBestHotel}/>}

            <div style={{ padding: "10px 0" }}>
                <h2>Oferty({count}):</h2>
                {props.hotels.map((hotel) => (
                    <Hotel {...hotel} key={hotel.id} />
                ))}
            </div>
        </div>
    )
}