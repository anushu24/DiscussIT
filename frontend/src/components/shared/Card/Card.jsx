import React from 'react';
import styles from './Card.module.css';


const Card = ({title, icon, children}) => {

    const logoImg = {
        height: '28.37px',
        width: '35.6px',
        top: '1.63px',
        blend: 'Pass through',
    }

    return (
        <div className={styles.card}>

            <div className={styles.headingWrapper}>
                {icon && <img style={logoImg} src={`/images/${icon}.png`} alt="logo"/>}
                {title && <h1 className={styles.heading}>{title}</h1>}
            </div>

            {children}

        </div>
    )
}

export default Card