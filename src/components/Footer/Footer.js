import React from 'react'
import styles from '../../styles/Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.footer_row}>
                <div className={styles.footer_about}>
                    <p>About</p>
                    <p>How Triphouse works</p>
                    <p>Careers</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
                <div className={styles.footer_types}>
                    <p>Property types</p>
                    <p>Guest houses</p>
                    <p>Hotels</p>
                    <p>Apartments</p>
                    <p>Villas</p>
                    <p>Holiday homes</p>
                    <p>Hostels</p>
                </div>
                <div className={styles.footer_support}>
                    <p>Support</p>
                    <p>Contact Customer Service</p>
                    <p>FAQ</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
