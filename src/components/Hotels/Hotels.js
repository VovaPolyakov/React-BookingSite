import React from 'react'
import styles from '../../styles/Hotel.module.scss'
import { useGetAllHotelApiQuery } from '../../ducks/hotel/hotel-api'
import {hotelImg} from '../../assets/image/hotel/hotelArray'

const Hotels = () => {
  const {data,isLoading,isError} = useGetAllHotelApiQuery();
  console.log(data?.results.hotels);
  return (
    <div className={styles.hotel}>
        <div className={styles.container}>
            <h1 className={styles.hotel_title}>Homes guests loves</h1>
            <div className={styles.hotel_row}>
              {data?.results.hotels.slice(0,4).map((item,idx) => (
                <div className={styles.hotel_item}>
                  <img className={styles.hotel_img} src={hotelImg[idx].img} alt='hotel'></img>
                  <div className={styles.hotel_text}>
                    <a className={styles.hotel_name}>{item.label}</a>
                    <p className={styles.hotel_location}>{item.locationName}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Hotels
