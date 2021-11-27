import styles from "./style.module.css";
import Image from "next/image";


const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerWrapper}>
				<div className={styles.footerLogo}>
					<Image src='/assets/icons/gdsc_logo.png' layout="fixed" width={50} height={25} />
					<div className={styles.footerLogoText}>
						Google Developer Students Club
						<br />
						<small>Presidency University Bengaluru</small>
					</div>
				</div>
				<hr className={styles.footerLine} />
				<div className={styles.footerSection}>
					<div className={styles.footerJoinUs}>
						<div className={styles.footerHead}>Lorem ipsum dolor emet</div>
						<form className={styles.footerForm}>
							<input
								placeholder="Email Address"
								className={styles.footerInput}
								type="email"
								autoComplete="email"
								required
							/>
							<button type="submit" className={styles.footerButton}>
								Join Us
							</button>
						</form>
					</div>
					<div className="footerQuickLinks">
						<div className={styles.footerHead}>Quick Links</div>
						<ul className={styles.footerLinks}>
							<li>About DSC</li>
							<li>Privacy</li>
							<li>Terms</li>
						</ul>
					</div>
					<div className={styles.footerSocial}>
						<div className={styles.footerHead}>Social Media</div>
						<div className={styles.footerLinksX}>
							<a target="_blank" href="https://rebrand.ly/gdsc-pu-insta">
								<Image src='/assets/icons/instagram.png' width={24} height={24} layout="fixed" />
							</a>
							<a target="_blank" href="https://rebrand.ly/gdsc-pu-twitter">
								<Image src='/assets/icons/Twitter.png' layout="fixed" width={24} height={24} />
							</a>
							<a target="_blank" href="https://rebrand.ly/gdsc-pu-discord">
								<Image src='/assets/icons/discord.png' layout="fixed" width={24} height={24} />
							</a>
							<a target="_blank" href="https://rebrand.ly/gdsc-pu-linkedin">
								<Image src='/assets/icons/Linkedin.png' layout="fixed" width={24} height={24} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;