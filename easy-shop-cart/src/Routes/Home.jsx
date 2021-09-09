import React from 'react'
import { Accessories } from '../Components/AllProducts/Accessories'
import { Clothes } from '../Components/AllProducts/Clothes'
import { Electronics } from '../Components/AllProducts/Electronics'
import styles from "../Components/styles/Contribute.module.css"

const Home = () => {
    return (
        <div className = {styles.home}>
            <Clothes/>
            <Accessories/>
            <Electronics/>
        </div>
    )
}

export { Home }
