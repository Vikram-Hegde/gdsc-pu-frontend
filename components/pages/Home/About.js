import React from 'react'
import aboutStyle from './about.module.css'

const About = ({title, subtitle, aboutimg}) => {
    return (
        <div>
            <div className={aboutStyle.about}>
                <div className={aboutStyle.leftabout}>
                    <h1 className={aboutStyle.abouttitle}>{title}</h1>
                    <p className={aboutStyle.aboutpara}>{subtitle}</p>
                </div>
                <div className={aboutStyle.rightabout}>
                    <img className={aboutStyle.aboutimg} src={aboutimg} alt="" />
                </div>
            </div>    
        </div>
    
    )
}

export default About
