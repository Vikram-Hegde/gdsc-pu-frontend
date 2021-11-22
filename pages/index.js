import Head from "next/head";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div>
      <Head>
        <title>GDSC-PU</title>
        <meta
          name="GDDSC-PU"
          content="GDSC-Pu, GDSC-PresidencyUniversity, Presidency University Banglore"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="title">Meet the Geeks</p>
    </div>
  );
}
