import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Space_Grotesk as Font } from "next/font/google";
import Script from "next/script";

const font = Font({
  subsets: ["latin"],
  weight: ["400"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id="clarity-analytics" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
        `}
      </Script>
      <main className={font.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
