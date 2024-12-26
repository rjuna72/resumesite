import Image from 'next/image';
import Navbar from '../navbar';

export default function Home() {
  return (
    <div className="h-screen bg-notebook flex flex-col items-center text-black p-6">
      <Navbar />

      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">A Bit About Me</h1>
          <p className="text-gray-600 text-sm">15 Dec, 2024</p>
        </div>

        <div className="mb-8">
          <Image
            src="/images/pfp.jpg"
            alt="Graph and LLM representation"
            width={300}
            height={300}
            className="rounded-md shadow-lg border border-gray-200"
          />
        </div>

        <div className="max-w-2xl text-justify text-gray-800 leading-relaxed p-2">
          <p>
            I am Arjun Santhosh, and this summer I decided to learn programming properly. This included web-development, app-development, and other scripting languages like Python. Admittedly, I was not able to explore too deeply into these topics; however...
          </p>
        </div>
      </div>
    </div>
  );
}
