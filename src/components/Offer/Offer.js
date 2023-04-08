import React from 'react'
import styles from '../../styles/Offer.module.scss'
// import {like,pc,headphones,message} from '../../assets/image/offer'
import like from '../../assets/image/offer/like.png'
import pc from '../../assets/image/offer/pc.png'
import message from '../../assets/image/offer/message.png'
import headphones from '../../assets/image/offer/headphones.png'


const Offer = () => {
  return (
    <div className={styles.offer}>
        <div className={styles.container}>
            <div className={styles.offer_box}>
                <h1>What do we offer</h1>
                <div className={styles.offer_row}>
                    <div className={styles.offer_item}>
                        <img src={headphones} alt='headphones'></img>
                        <p>Support 24/7</p>
                    </div>
                    <div className={styles.offer_item}>
                        <img src={message} alt='message'></img>
                        <p>Communicate directly</p>
                    </div>
                    <div className={styles.offer_item}>
                        <img src={pc} alt='pc'></img>
                        <p>Book online</p>
                    </div>
                    <div className={styles.offer_item}>
                        <img src={like} alt='like'></img>
                        <p>Real guest reviews</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offer
