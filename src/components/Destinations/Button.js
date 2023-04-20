import React from 'react'
import classNames from 'classnames/bind'
import styles from '../../styles/Destinations.module.scss'

const Button = ({item,handleClick,isActive,index}) => {
    let cx = classNames.bind(styles)
    let button = cx({
        region_button:!isActive,
        region_button_active:isActive
    })
  return (
    <button className={button} onClick={handleClick} id={index}>{item}</button>
  )
}

export default Button
