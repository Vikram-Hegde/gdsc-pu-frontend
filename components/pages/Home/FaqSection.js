import styles from "./faq.module.css";
import Accordian from "./Accordian";
import Image from "next/image";

export default function FaqSection() {
  return (
    <section className={styles.faq}>
      <div className={styles.faqTitle}>FAQ</div>
      <div className={styles.faqWrapper}>
        <div className={styles.faqImage}>
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
  );
}
