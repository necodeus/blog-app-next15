
import Head from "next/head";
import "./globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
