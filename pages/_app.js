import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { Red_Hat_Mono } from "@next/font/google";
import "../styles/globals.css";

// add font in Tailwind style
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
        <title>welcone to VJkET website</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
