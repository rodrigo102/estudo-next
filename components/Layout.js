import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico"></link>
        <title>Pokenext</title>
      </Head>
      <Navbar></Navbar>
      <main className="main-container">{children}</main>
      <Footer></Footer>
    </>
  );
}
