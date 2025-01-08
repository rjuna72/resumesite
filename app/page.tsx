import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-gray-50 flex flex-col justify-center items-center text-black p-4 sm:p-6 bg-notebook">
      {/* Navbar */}
      <div className="hidden md:flex space-x-4 absolute top-6">
        <Link href="/" className="hover:underline text-sm sm:text-base">Home</Link>
        <Link href="/about" className="hover:underline text-red-600 text-sm sm:text-base">About</Link>
        <Link href="/projects" className="hover:underline text-green-600 text-sm sm:text-base">Projects</Link>
        <Link href="/resume" className="hover:underline text-blue-700 text-sm sm:text-base">Resume</Link>
      </div>

      {/* Notebook Content */}
      <div className="relative rounded-md p-6 sm:p-8 w-full sm:w-10/12 md:max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Arjun&#39;s Website</h1>
        <p className="text-gray-600 text-sm sm:text-base text-center mb-6">15 Dec, 2024</p>
        <p className="align-middle text-gray-800 text-sm sm:text-lg text-center leading-relaxed">
          Hey, I&#39;m Arjun Santhosh. Welcome to my website!
        </p>
      </div>
    </div>
  );
}
