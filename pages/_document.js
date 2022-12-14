import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="fixed top-0 w-screen h-screen bg-black invisible lg:visible xl:visible 2xl:visible">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
