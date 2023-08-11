import * as React from "react";
import { AppProps } from "next/app";
import "@/app/globals.css";
import ScrollObserver from "@/lib/scroll-observer";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ScrollObserver>
      <Component {...pageProps} />
    </ScrollObserver>
  );
};

export default App;
