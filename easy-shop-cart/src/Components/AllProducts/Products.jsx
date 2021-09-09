import React from 'react'
import {Link} from "react-router-dom"
import styles from "../styles/Products.module.css"
import { Accessories } from './Accessories'
import { Clothes } from './Clothes'
import { ClothesCard } from './ClothesCard'
import { Electronics } from './Electronics'

const links = [
    {
        to: "/accessories",
        title: "Accessories",
        exact: true
    },
    {
        to: "/clothes",
        title: "Clothes",
        exact: true
    },
    {
        to: "/electronics",
        title: "Electronics" ,
        exact: true
    },
]

const Products = () => {
    return (
        <>
            <div>
                {links.map(({to, title, exact}) => (
                    <Link to = {to} key = {to} className = {styles.productsLink} >
                        {title}
                    </Link>
                ))}
            </div>
        </>
    )
}

export { Products }
