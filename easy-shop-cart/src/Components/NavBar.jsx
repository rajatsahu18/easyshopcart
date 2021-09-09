import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import {NavLink} from "react-router-dom"
import { AuthContext } from '../Context/AuthContextProvider'
import styles from "./styles/Contribute.module.css"

const NavBar = () => {

    const {cartCount} = React.useContext(AuthContext)

    const links = [
        {
            to: "/",
            title: "Home",
            exact: true
        },
        {
            to: "/contact",
            title: "Contact",
            exact: false
        },
        {
            to: "/about",
            title: "About",
            exact: false
        },
        {
            to: "/faq",
            title: "FAQ",
            exact: false
        },
        {
            to: "/products",
            title: "Products",
            exact: false
        },
        {
            to: "/signin",
            title: "Sign In",
            exact: false
        },
        {
            to: "/shoppingcart ",
            title: <FaShoppingCart/> ,
            Count: cartCount !== 0 && cartCount,
            exact: false
        },
    ]
  
    return (
        <div className = {styles.navBar}>
            {links.map(({to, title, exact, Count}) => (
                <NavLink to = {to} key = {to} className = {styles.navLink} >
                    {title}
                    <span> {Count} </span>
                </NavLink>
            ))}
        </div>
    )
}

export { NavBar }
