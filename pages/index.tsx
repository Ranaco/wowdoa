import * as React from "react";
import Landing from "@/components/landing";
import MainPage from "@/components/main";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  return (
    <div
      className={inter.className}
      style={{
        height: "100vh",
        width: "100vw",
        padding: "0px",
        margin: "0px",
      }}
    >
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Wowdoa Synmage</title>
      </Head>
      <Landing />
      <MainPage />
    </div>
  );
};

export default Home;
