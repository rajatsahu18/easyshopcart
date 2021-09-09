import React from 'react'
import {  FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import styles from "../Components/styles/Footer.module.css"

const Footer = () => {
    return (
        <div className  = {styles.footerComponent}>
            <div className = {styles.someLinks}>
                <div className = {styles.someLinks}>About</div>
                <div className = {styles.someLinks}>Contact</div>
                <div className = {styles.someLinks}>FAQ</div>
                <div className = {styles.someLinks}>JOB OPPORTUNITIES</div>
            </div>

            <div className  = {styles.icons}>
                <div> <FaFacebook/> </div>
                <div> <FaInstagram/> </div>
                <div> <FaYoutube/> </div>
                <div> <FaTwitter/> </div>
            </div>          
            <h1 className  = {styles.desc} >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    <br/> Nam ullam inventore odio minima nihil laborum, eius adipisci 
                    <br/> unde provident distinctio nostrum vitae cupiditate excepturi eum, 
                    <br/> labore voluptatibus voluptatem natus cum!
            </h1>
        </div>
    )
}

export { Footer }
