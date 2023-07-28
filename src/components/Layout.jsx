import React from "react";
import Navbar from "./navbar";
import FooterA from "./footerA";
import FooterB from "./footerB";
import FooterC from "./footerC";
import FooterD from "./footerD";
import FooterF from "./footerF";
import FooterG from "./footerG";
import FooterH from "./footerH";
import FooterI from "./footerI";

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <FooterA />
      <FooterB />
      <FooterC />
      <FooterD />
      <FooterF />
      <FooterG />
      <FooterH />
      <FooterI />
    </>
  );
};

export default Layout;
