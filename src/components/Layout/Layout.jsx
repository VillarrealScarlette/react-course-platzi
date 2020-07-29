import React, { Children } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => (
  <div className="app">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
