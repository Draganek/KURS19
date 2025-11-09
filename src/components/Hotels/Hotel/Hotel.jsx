import styles from './Hotel.module.css'
import { useContext } from 'react'
import ThemeContext from '../../../context/ThemeContext'
//import hotelImg from '../../../assets/images/hotel.jpg'


/**
 * 
 * @param {{
 * id: number;
 * name: string;
 * city: string;
 * rating: string;
 * description: string;
 * image: string;
 * }} props 
 */

export default function Hotel(props) {
    const themeColor = useContext(ThemeContext)

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
                            <p><b>Ocena: {props.rating}</b></p>
                            <span className="badge text-bg-secondary">233</span>
                        </div>
                    </div>
                </div>
            </div>
            <p className={styles.description}>
                {props.description}
            </p>
            <div className='text-end'>
                <button className={`btn btn-${themeColor.color}`}>Pokaż</button>
            </div>
        </div>
    )
}