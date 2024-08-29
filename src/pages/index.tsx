import Head from "next/head";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bibek Oli - Portfolio</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-400 text-white">
        <div className="max-w-screen-xl mx-auto py-16 px-6">
        <div className="text-center sm:text-left bg-white bg-opacity-10 p-8 rounded-lg shadow-lg">
          <h1 className="text-5xl font-extrabold mb-4 text-blue-50">
            Bibek Oli
          </h1>
          <p className="text-2xl text-blue-50 mb-4 font-light">
            Full Stack Developer
          </p>
          <p className="text-lg text-blue-50 max-w-3xl leading-relaxed">
            I am a full stack developer with experience in TypeScript, Next.js, React.js, and MongoDB. I am passionate about creating user-friendly, performant, and accessible applications. Currently pursuing a BCA degree at Mechi Multiple Campus.
          </p>
        </div>

          {/* Skills Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-6 text-center sm:text-left">Skills</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center sm:text-left">
              <li className="bg-white bg-opacity-20 py-4 px-6 rounded-lg shadow-lg flex items-center gap-3">
                <Icon icon="skill-icons:typescript" className="text-2xl" />
                <span>TypeScript</span>
              </li>
              <li className="bg-white bg-opacity-20 py-4 px-6 rounded-lg shadow-lg flex items-center gap-3">
                <Icon icon="skill-icons:javascript" className="text-2xl" />
                <span>JavaScript</span>
              </li>
              <li className="bg-white bg-opacity-20 py-4 px-6 rounded-lg shadow-lg flex items-center gap-3">
                <Icon icon="devicon:nextjs" className="text-2xl" />
                <span>Next.js</span>
              </li>
              <li className="bg-white bg-opacity-20 py-4 px-6 rounded-lg shadow-lg flex items-center gap-3">
                <Icon icon="skill-icons:mongodb" className="text-2xl" />
                <span>MongoDB</span>
              </li>
              <li className="bg-white bg-opacity-20 py-4 px-6 rounded-lg shadow-lg flex items-center gap-3">
                <Icon icon="vscode-icons:file-type-reactjs" className="text-2xl" />
                <span>React.js</span>
              </li>
              <li className="bg-white bg-opacity-20 py-4 px-6 rounded-lg shadow-lg flex items-center gap-3">
                <Icon icon="vscode-icons:file-type-node" className="text-2xl" />
                <span>Node.js</span>
              </li>
            </ul>
          </div>

          {/* Hobbies Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-semibold mb-6 text-center sm:text-left">Hobbies</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center sm:text-left">
              <li className="bg-white bg-opacity-20 py-4 px-6 rounded-lg shadow-lg flex items-center gap-3">
                <Icon icon="bx:bx-book-reader" className="text-2xl" />
                Reading
              </li>
              <li className="bg-white bg-opacity-20 py-4 px-6 rounded-lg shadow-lg flex items-center gap-3">
                <Icon icon="bx:bx-camera" className="text-2xl" />
                Photography
              </li>
              <li className="bg-white bg-opacity-20 py-4 px-6 rounded-lg shadow-lg flex items-center gap-3">
                <Icon icon="ic:twotone-train" className="text-2xl" />
                Traveling
              </li>
              <li className="bg-white bg-opacity-20 py-4 px-6 rounded-lg shadow-lg flex items-center gap-3">
                <Icon icon="bx:bx-music" className="text-2xl" />
                Music
              </li>
              <li className="bg-white bg-opacity-20 py-4 px-6 rounded-lg shadow-lg flex items-center gap-3">
                <Icon icon="bx:bx-bulb" className="text-2xl" />
                Learning
              </li>
              <li className="bg-white bg-opacity-20 py-4 px-6 rounded-lg shadow-lg flex items-center gap-3">
                <Icon icon="bx:bx-code-alt" className="text-2xl" />
                Coding
              </li>
              <li className="bg-white bg-opacity-20 py-4 px-6 rounded-lg shadow-lg flex items-center gap-3">
                <Icon icon="majesticons:flower-2" className="text-2xl" />
                Gardening
              </li>

            </ul>
          </div>

          {/* Social Links Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-semibold mb-6 text-center sm:text-left">Connect with Me</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center sm:text-left">
              <Link href="https://facebook.com/bibekoli28" target="_blank" className="flex items-center gap-3 bg-white bg-opacity-20 p-4 rounded-lg shadow-lg hover:bg-opacity-30 transition">
                <Icon icon="akar-icons:facebook-fill" className="text-2xl" />
                <span className="text-lg">Facebook</span>
              </Link>
              <Link href="https://instagram.com/bibekoli28" target="_blank" className="flex items-center gap-3 bg-white bg-opacity-20 p-4 rounded-lg shadow-lg hover:bg-opacity-30 transition">
                <Icon icon="akar-icons:instagram-fill" className="text-2xl" />
                <span className="text-lg">Instagram</span>
              </Link>
              <Link href="https://linkedin.com/in/bibekoli" target="_blank" className="flex items-center gap-3 bg-white bg-opacity-20 p-4 rounded-lg shadow-lg hover:bg-opacity-30 transition">
                <Icon icon="akar-icons:linkedin-fill" className="text-2xl" />
                <span className="text-lg">LinkedIn</span>
              </Link>
              <Link href="https://github.com/bibekoli" target="_blank" className="flex items-center gap-3 bg-white bg-opacity-20 p-4 rounded-lg shadow-lg hover:bg-opacity-30 transition">
                <Icon icon="akar-icons:github-fill" className="text-2xl" />
                <span className="text-lg">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}