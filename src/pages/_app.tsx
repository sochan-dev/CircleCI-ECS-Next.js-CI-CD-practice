import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any;
  //return <AnyComponent {...pageProps} />;
  return <Component {...pageProps} />;
};

export default MyApp;
