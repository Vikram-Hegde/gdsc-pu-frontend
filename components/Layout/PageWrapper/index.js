import React from "react";
import Footer from "../Footer";
import Meta from "../Meta";
import Navbar from "../Navbar";
import style from "./style.module.css";

const PageWrapper = ({ children, title, description }) => {
  return (
    <>
      <div className={style.outer}>
        <div className={style.inner}>
          <Meta title={title} description={description} />
          <Navbar />
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageWrapper;
