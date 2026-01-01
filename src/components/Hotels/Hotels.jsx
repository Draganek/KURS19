import BestHotel from "./BestHotel/BestHotel";
import Hotel from "./Hotel/Hotel";
import LastHotel from "./LastHotel/LastHotel";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router";

export default function Hotels(props) {
    const [lastHotel, setLastHotel] = useLocalStorage('last-hotel', null)
    const navigate = useNavigate()
    const count = props.hotels.length
    const bestHotel = count > 1
        ? [...props.hotels].sort((a, b) => a.rating - b.rating ? -1 : 1)[0]
        : null

    const showHotel = (id) => {
        setLastHotel(props.hotels.find(x => x.id === id))
        navigate(`/hotel/${id}`)
    }

    return (
        <div>
            {lastHotel && <LastHotel
                hotel={lastHotel}
                onYes={() => { navigate(`/hotel/${lastHotel.id}`) }}
                onNo={() => { setLastHotel(null) }} />}
            {bestHotel && <BestHotel hotel={bestHotel} />}

            <div style={{ padding: "10px 0" }}>
                <h2>Oferty({count}):</h2>
                {props.hotels.map((hotel) => (
                    <Hotel {...hotel} key={hotel.id} onShow={showHotel} />
                ))}
            </div>
        </div>
    )
}