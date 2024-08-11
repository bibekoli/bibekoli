import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Slab as Font } from "next/font/google";

const font = Font({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}
