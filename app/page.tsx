import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-gray-50 flex flex-col justify-center items-center text-black p-4 sm:p-6 bg-notebook">
      {/* Navbar */}
      <div className="hidden md:flex space-x-4 absolute top-6">
        <Link href="/" className="hover:underline nycdfont text-sm sm:text-base mt-8 pt-60">Home</Link>
        <Link href="/about" className="hover:underline nycdfont text-red-600 text-sm sm:text-base pt-60 mt-8">About</Link>
        <Link href="/projects" className="hover:underline nycdfont text-green-600 text-sm sm:text-base mt-8 pt-60">Writing</Link>
        <Link href="/resume" className="hover:underline nycdfont text-blue-700 text-sm sm:text-base pt-60 mt-8">Resume</Link>


        <link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&family=Permanent+Marker&display=swap" rel="stylesheet"></link>

      </div>

      {/* Notebook Content */}
      <div className="relative rounded-md p-10 sm:p-8 w-full sm:w-10/12 md:max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Arjun Santhosh</h1>


        {/*<p className="align-middle text-gray-800 text-sm sm:text-lg text-center leading-relaxed">
          Hey, I&#39;m Arjun Santhosh!
        </p>*/}
      </div>
    </div>
  );
}
