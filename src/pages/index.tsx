import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">Hi! I am Bibek Oli!</h1>
      <p className="mt-3 text-2xl font-semibold">
        This is my awesome website!
      </p>
    </main>
  );
}
