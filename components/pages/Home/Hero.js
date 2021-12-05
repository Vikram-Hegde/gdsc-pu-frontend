import React from 'react'
import Button from "../../../components/globals/Button"
import heroStyle from "./hero.module.css"



const Hero = ({title, subtitle, logosource, heroimg}) => {
    return (
        <div className={heroStyle.main}>
            <div className={heroStyle.left}>
               <img className={heroStyle.leftimg} src={logosource}/>
                <h1 className={heroStyle.title}>{title}</h1>
                <p className={heroStyle.para}>{subtitle}</p>
                <Button text="Join Us" variant="primary"/>
            </div>
            <div className={heroStyle.right}>
                <img className={heroStyle.rightimg} src={heroimg} alt="" />
            </div>
        </div>
    )
}

export default Hero
