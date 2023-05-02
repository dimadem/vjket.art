import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { Red_Hat_Mono } from "next/font/google";
import { MenuContextProvider } from "../context/menu.context";
import "../styles/globals.css";

// add font
const redhatmono = Red_Hat_Mono({
  subsets: ["latin"],
  variable: "--font-redhatmono",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${redhatmono.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>VJkET</title>
        <meta name="description" content="VJkET" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <MenuContextProvider
        disciplines={pageProps.disciplines}
        years={pageProps.years}
      >
        <ThemeProvider attribute="class" enableSystem={false}>
          <Component {...pageProps} />
        </ThemeProvider>
      </MenuContextProvider>
    </>
  );
}

export default MyApp;
