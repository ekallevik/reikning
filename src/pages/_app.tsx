import { AppProps } from "next/app";
import Head from "next/head";
import React, { FunctionComponent } from "react";

import "../../styles/globals.css";
import useUserData from "../lib/hooks";
import { UserContext } from "../lib/context";
import Navbar from "../components/Navbar";

/**
 * Next.js uses the App component to initialize pages. You can override it
 * and control the page initialization. Here use use it to render the
 * `Chrome` component on each page, and apply an error boundary.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-app
 */
const EuiApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const user = useUserData();

  return (
    <UserContext.Provider value={user}>
      <Navbar />
      <Head>
        <title> Reikning </title>
      </Head>

      <Component {...pageProps} />
    </UserContext.Provider>
  );
};

export default EuiApp;
