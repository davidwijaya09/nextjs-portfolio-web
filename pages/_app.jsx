import '../styles/app.scss';
import Head from 'next/head';



// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;