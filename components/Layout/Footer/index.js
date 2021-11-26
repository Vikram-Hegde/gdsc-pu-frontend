import React from "react";
import styles from './style.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
      <div className={styles.footer__logo}>
       LOGO SVG
      </div>
      <hr className={styles.footer__line}/>
		</footer>
	);
};

export default Footer;
