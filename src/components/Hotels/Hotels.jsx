import { useCallback } from "react";
import BestHotel from "./BestHotel/BestHotel";
import Hotel from "./Hotel/Hotel";
import LastHotel from "./LastHotel/LastHotel";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function Hotels(props) {
    const [lastHotel, setLastHotel] = useLocalStorage('last-hotel', null)
    const count = props.hotels.length
    const bestHotel = count > 1
        ? [...props.hotels].sort((a, b) => a.rating - b.rating ? -1 : 1)[0]
        : null

    const showBestHotel = useCallback((hotel) => {
        console.log(hotel)
    }, [])

    const showHotel = (id) => {
        setLastHotel(props.hotels.find(x => x.id === id))
    }

    return (
        <div>
            {lastHotel && <LastHotel hotel={lastHotel} onNo={() => { setLastHotel(null) }} />}
            {bestHotel && <BestHotel hotel={bestHotel} onShow={showBestHotel} />}

            <div style={{ padding: "10px 0" }}>
                <h2>Oferty({count}):</h2>
                {props.hotels.map((hotel) => (
                    <Hotel {...hotel} key={hotel.id} onShow={showHotel} />
                ))}
            </div>
        </div>
    )
}