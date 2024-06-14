import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Layout = (props) => {
  return (
    <div className="flex flex-col min-h-screen  ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="author" content="Pratik Chavan" />.
        <meta name="keywords" content='Online Store, Ecommerce , Online shop  '/>
      </Helmet>

      <Header />
      <main className={`flex-1 `}>
        <div className="container mx-auto p-4 ">{props.children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
