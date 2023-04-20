import React from 'react'
import styles from '../../styles/Reviews.module.scss'
import {hotels} from './hotels'
import avatar from '../../assets/image/reviews/avatar.png'

const Reviews = () => {
  return (
    <div className={styles.reviews}>
        <div className={styles.container}>
            <h1 className={styles.reviews_title}>Guests reviews</h1>
            <div className={styles.hotel_row}>
                {hotels.map((item,idx) => (
                  <div className={styles.hotel}>
                    <div className={styles.hotel_top}>
                        <img src={item.image} alt={idx} className={styles.hotel_img}></img>
                        <div className={styles.hotel_cost}><span >From {item.cost}</span></div>
                    </div>
                    <div className={styles.hotel_bottom}>
                      <div className={styles.hotel_info}>
                          <div className={styles.hotel_main}>
                            <p className={styles.hotel_name}>{item.name}</p>
                            <p alt={item.name} className={styles.hotel_country}>{item.location}</p>
                          </div>
                          <div className={styles.hotel_popularity}>
                            <div className={styles.hotel_score}>{item.score}</div>
                            <div className={styles.hotel_reviews}>{item.reviews} reviews</div>
                          </div>
                      </div>
                      <div className={styles.hotel_review}>
                          <div className={styles.review_user}>
                              <img src={avatar} alt={idx}></img>
                              <div className={styles.user_info}>
                                  <p className={styles.user_name}>{item.user.name}</p>
                                  <p className={styles.user_text}>{item.user.country}</p>
                              </div>
                          </div>
                          <div className={styles.review_text}>{item.user.text}</div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Reviews
