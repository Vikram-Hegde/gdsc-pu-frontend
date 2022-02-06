import styles from "./wwd.module.css";
//import Cloud from "public/assets/cloud.png";
export default function FaqSection() {
    return (

        <div className={styles.menu}>
            <h1>What We Do?</h1>
            <ul >
                <li >

                    {/*  eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/icons/cloud.png" alt="cloud" />
                    <h4 className={styles.cloudtitle}>Cloud Computing</h4>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

                </li>
                <li>
                    {/*  eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/icons/web.png" alt="web" />
                    <h4 className={styles.webtitle}>Web Development</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

                </li>
                <li  >
                    {/*  eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/icons/design.png" alt="design" />
                    <h4 className={styles.designtitle}>Designing</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

                </li>
                <li >
                    {/*  eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/icons/app.png" alt="app" />
                    <h4 className={styles.apptitle}>App Development</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

                </li>
                <li >
                    {/*  eslint-disable-next-line @next/next/no-img-element */}
                    <img src="assets/icons/blockchain.png" alt="blockchain" />
                    <h4 className={styles.blockchaintitle}>Blockchain</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

                </li>
            </ul>
        </div>
    );
}