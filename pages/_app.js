import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { Red_Hat_Mono } from "@next/font/google";
import { MenuContextProvider } from "../context/menu.context";
import "../styles/globals.css";

// add font in Tailwind style
const redhatmono = Red_Hat_Mono({
  subsets: ["latin"],
  variable: "--font-redhatmono",
});

function MyApp({ Component, pageProps }) {
  console.log("MYAPP:", pageProps);
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${redhatmono.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>welcone to VJkET website</title>
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
