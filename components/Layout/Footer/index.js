import React from "react";
import styles from "./style.module.css";

const Footer = () => { 
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__logo}>LOGO SVG</div>
			<hr className={styles.footer__line} />
			<div className={styles.footer__wrapper}>
				<div className={styles.footer__joinus}>
					<div className={styles.footer__head}>Lorem ipsum dolor emet</div>
					<form className={styles.footer__form}>
						<input placeholder="Email Address" className={styles.footer__input} type="email" name="email" />
						<button className={styles.footer__button}>Join Us</button>
					</form>
				</div>
				<div className="footer__quick-links">
					<div className={styles.footer__head}>Quick Links</div>
					<ul className="footer__links">
						<li>About DSC</li>
						<li>Privacy</li>
						<li>Terms</li>
					</ul>
				</div>
				<div className={styles.footer__social}>
					<div className={styles.footer__head}>Social Media</div>
					<div className={styles.footer__media_links}>
						<a href="#" className="instagram">
							IN
						</a>
						<a href="#" className="discord">
							DI
						</a>
						<a href="#" className="twitter">
							TW
						</a>
						<a href="#" className="linkedin">
							LI
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
 };

export default Footer;
