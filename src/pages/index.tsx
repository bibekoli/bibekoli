import Head from "next/head";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bibek Oli - Portfolio</title>
      </Head>
      <main className="min-h-screen bg-blue-200">
        <div className="max-w-screen-xl mx-auto p-10">
          <h1 className="text-4xl font-bold mb-4 text-center sm:text-left">Bibek Oli</h1>
          <p className="text-xl mb-2">Full Stack Developer</p>
          <p>
            I am a full stack developer with experience in TypeScript, Next.js,
            React.js, and MongoDB. I am passionate about creating user-friendly
            applications with a focus on performance and accessibility. I am currently
            studying BCA at Mechi Multiple Campus.
          </p>
          <br />
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc pl-5">
            <li className="text-lg mb-2">TypeScript</li>
            <li className="text-lg mb-2">Next.js</li>
            <li className="text-lg mb-2">MongoDB</li>
            <li className="text-lg mb-2">Tailwind CSS</li>
            <li className="text-lg mb-2">Material-UI</li>
          </ul>
          <br />
          <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
          <div className="flex flex-col space-y-4">
            <Link href="https://facebook.com/bibekoli28" target="_blank" className="flex items-center gap-2">
              <Icon icon="akar-icons:facebook-fill" className="text-xl" />
              Facebook
            </Link>
            <Link href="https://instagram.com/bibekoli28" target="_blank" className="flex items-center gap-2">
              <Icon icon="akar-icons:instagram-fill" className="text-xl" />
              Instagram
            </Link>
            <Link href="https://linkedin.com/in/bibekoli" target="_blank" className="flex items-center gap-2">
              <Icon icon="akar-icons:linkedin-fill" className="text-xl" />
              LinkedIn
            </Link>
            <Link href="https://github.com/bibekoli" target="_blank" className="flex items-center gap-2">
              <Icon icon="akar-icons:github-fill" className="text-xl" />
              GitHub
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
