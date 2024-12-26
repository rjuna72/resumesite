import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-gray-50 flex flex-col justify-center items-center text-black p-6 bg-notebook">
      {/* Navbar */}
      <div className="hidden md:flex space-x-6 absolute top-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline text-red-600">About</Link>
        <Link href="/contact" className="hover:underline text-green-600">Contact</Link>
        <Link href="/resume" className="hover:underline text-blue-700">Resume</Link>
      </div>

      {/* Notebook Content */}
      <div className="relative rounded-md p-8 w-11/12 max-w-2xl">
        <h1 className="text-5xl font-bold mb-4 text-center">Arjun&#39;s Website</h1>
        <p className="text-gray-600 text-center mb-6">15 Dec, 2024</p>
        <p className="align-middle text-gray-800 text-center leading-relaxed">
          Hey, I&#39;m Arjun Santhosh. Welcome to my website!
        </p>

      </div>
    </div>
  );
}
