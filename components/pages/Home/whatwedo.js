import styles from "./wwd.module.css";
//import Cloud from "public/assets/cloud.png";
export default function FaqSection() {
	return (
    
    <div className={styles.menu}>
        <h1>What We Do?</h1>
        <ul >
            <li >
                <img src="/assets/icons/cloud.png"/>
                <h4 className={styles.cloudtitle}>Cloud Computing</h4>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
     
            </li>
            <li>
                <img src="/assets/icons/webdev.png"/>
                <h4 className={styles.webtitle}>Web Development</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                
            </li>
            <li  >
                <img src="/assets/icons/Graphic Designing.png"/>
                <h4 className={styles.designtitle}>Designing</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                
            </li>
            <li >
                <img src="/assets/icons/App Development.png"/>
                <h4 className={styles.apptitle}>App Development</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                
            </li>
            <li >
                <img src="assets/icons/Blockchain Technology.png"/>
                <h4 className={styles.blockchaintitle}>Blockchain</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                
            </li>
        </ul>  
    </div>
	);
}