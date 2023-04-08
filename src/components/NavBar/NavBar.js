import React from 'react'
import styles from '../../styles/NavBar.module.scss'
import logo from '../../assets/image/navbar/logo.svg'
import account from '../../assets/image/navbar/account.svg'
import night from '../../assets/image/navbar/night.svg'

import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { hotelActions } from '../../ducks/hotel/hotel-slice'
import { useGetAllHotelApiQuery } from '../../ducks/hotel/hotel-api';

const NavBar = () => {
    const [city,setCity] = useState('')
    const [date,setDate] = useState()
    const [room,setRoom] = useState(2)
    const {data,isLoading,isError} = useGetAllHotelApiQuery();
    const dispatch = useDispatch()

    const handleChange = (e) => {
        switch(e.target.name){
            case 'city':
                setCity(e.target.value)
            case 'date':
                setDate(e.target.value)
            default:
                break
        }
    }
    const handleClick = () => {
        dispatch(hotelActions.getDataAboutUser({date,city,room}))
    }
  return (
    <div className={styles.navbar}>
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.row}>
                    <div className={styles.logo}>
                    <img alt='logo' src={logo}></img>
                    </div>
                    <nav className={styles.menu}>
                        <ul>
                            <li className={styles.menu_link}>Stays</li>
                            <li className={styles.menu_link}>Attractions</li>
                        </ul>
                        <div className={styles.menu_buttons}>
                            <button className={styles.button_night}><img alt='night' src={night}></img></button>
                            <button className={styles.button_account}><img alt='account' src={account}></img></button>
                        </div>
                    </nav>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.title}>
                    <h1>Discover stays<br></br>
                        to live, work or just relax
                    </h1>
                </div>
                <p className={styles.hotel_text}>Your destination or hotel name</p>
                <p className={styles.check}>Check-in — Check-out</p>
                <div className={styles.search_inputs}>
                    <input onChange={handleChange} name='city' className={styles.input_city} required placeholder='New York' type='text'></input>
                    <input onChange={handleChange} className={styles.input_date} name='date' required type='date'></input>
                    <input className={styles.input_rooms} required  placeholder='2 Adults — 0 Children — 1 Room' type='text'></input>
                    <button onClick={handleClick} className={styles.search_button} >Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
