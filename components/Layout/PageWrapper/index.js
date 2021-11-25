import React from "react";
import Footer from "../Footer";
import Meta from "../Meta";
import Navbar from "../Navbar";

const PageWrapper = ({ children, title, description }) => {
  return (
    <>
      <Meta title={title} description={description} />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PageWrapper;
