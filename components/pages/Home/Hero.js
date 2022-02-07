import React from 'react'
import Button from "../../../components/globals/Button"
import heroStyle from "./hero.module.css"



const Hero = ({ title, mobtitle, subtitle, logosource, heroimg }) => {
    return (
        <div className={heroStyle.main}>
            <div className={heroStyle.left}>
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img className={heroStyle.leftimg} src={logosource} alt={title} />
                <span className={heroStyle.title}>{title}</span>
                <span className={heroStyle.mob_title}>{mobtitle}</span>
                <p className={heroStyle.para}>{subtitle}</p>
                <Button type='link' href={'https://rebrand.ly/gdsc-pu-links'} text="Join Us" variant="primary" />
            </div>
            <div className={heroStyle.right}>
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img className={heroStyle.rightimg} src={heroimg} alt={title} />
            </div>
        </div>
    )
}

export default Hero
