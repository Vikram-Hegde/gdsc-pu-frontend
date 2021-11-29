import PageWrapper from "../components/Layout/PageWrapper";
import Button from "../components/globals/Button";
import Accordian from "../components/Accordian";
import Image from "next/image";
import styles from "./style.module.css";
export default function Home() {
	return (
		<PageWrapper
			title="Home GDSC-PU"
			description="Homepage GDSC presidency university"
		>
			<h1>HomePage</h1>
			{/* Button Example */}
			<Button
				variant="primary"
				// disabled="true"
				text="Click Here"
				type="submit"
				onclick={() => console.log("Button Clicked")}
			/>
			<section className={styles.faq}>
				<div className={styles.faqTitle}>FAQ</div>
				<div className={styles.faqWrapper}>
					<div className={ styles.faqImage }>
						<Image
							src="/assets/illustrations/settings-2.png"
							layout="responsive"
							width={523}
							height={392}
						/>
					</div>
					<Accordian />
				</div>
			</section>
		</PageWrapper>
	);
}
