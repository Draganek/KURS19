import styles from './Hotel.module.css'
//import hotelImg from '../../../assets/images/hotel.jpg'

export default function Hotel(props) {
    return (
        <div className={styles.hotel}>
            <div className='row'>
                <div className="col-4">
                    <img src={props.image} alt='' className='img-fluid img-thumbnail'></img>
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-6">
                            <p><b>{props.name}</b></p>
                            <span className="badge text-bg-light">{props.city}</span>
                        </div>
                        <div className="col-6">
                            <p><b>{props.rating}</b></p>
                            <span className="badge text-bg-secondary">233</span>
                        </div>
                    </div>
                </div>
            </div>
            <p className={styles.description}>
                {props.description}
            </p>
            <div className='text-end'>
                <button className='btn btn-primary'>Pokaż</button>
            </div>
        </div>
    )
}