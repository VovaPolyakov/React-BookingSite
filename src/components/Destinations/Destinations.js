import React from 'react'
import styles from '../../styles/Destinations.module.scss'
import island from '../../assets/image/destinations/island.jpg'
import maldive from '../../assets/image/destinations/maldive.jpg'
import norway from '../../assets/image/destinations/norway.jpg'
import spain from '../../assets/image/destinations/spain.jpg'
import arrow from '../../assets/image/destinations/arrow.png'
import { useState } from 'react'
import Button from './Button'


const Destinations = () => {
  const [active,setActive] = useState(0)
  const handleClick = (e) => {
    setActive(e.target.id)
  }
  return (
    <div className={styles.destinations}>
        <div className={styles.container}>
            <div className={styles.destinations_title}>The best destinations</div>
            <div className={styles.regions_row}>
                {['Regions','Cities','Place of interest'].map((item,idx) => (
                  <Button item={item} handleClick={handleClick} isActive={active == idx} index={idx}/>
                ))}
            </div>
            <div className={styles.country_row}> 
                <div className={styles.country}>
                  <div className={styles.country_img}>
                    <div className={styles.country_book}></div>
                    <img src={maldive} alt='country'></img>
                  </div>
                  <p>Maldives</p>
                </div>
                <div className={styles.country}>
                  <div className={styles.country_img}>
                      <div className={styles.country_book}></div>
                      <img src={spain} alt='country'></img>
                  </div>
                  <p>Spain</p>
                </div>
                <div className={styles.country}>
                  <div className={styles.country_img}>
                    <div className={styles.country_book}></div>
                    <img src={norway} alt='country'></img>
                  </div>
                  <p>Norway</p>
                </div>
                <div className={styles.country}>
                  <div className={styles.country_img}>
                    <div className={styles.country_book}></div>
                    <img src={island} alt='country'></img>
                  </div>
                  <p>Island</p>
                </div>
            </div>
            <div className={styles.destinations_arrow}>
              <button><img src={arrow}></img></button>
            </div>
        </div>
    </div>
  )
}

export default Destinations
