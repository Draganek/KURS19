import Hotel from "./Hotel/Hotel";

export default function Hotels(props) {

    const count = props.hotels.lenght

    return (
        <div>
            <div style={{ border: '1px solid #cdcdcd', padding: 10 }}>
                <h2>Oferty({count}):</h2>
                {props.hotels.map((hotel) => (
                    <Hotel {...hotel} key={hotel.id}/>
                ))}
            </div>
        </div>
    )
}