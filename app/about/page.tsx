export default function Home() {
    return (
      <div>
  
  
        <div className="h-auto min-w-full bg-gray-50 text-black flex flex-col items-center p-6">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">A Bit About Me</h1>
            <p className="text-gray-600 text-sm">15 Dec, 2024</p>
          </div>
  
         
          <div className="mb-8">
            <img
              src="/path-to-image.jpg"
              alt="Graph and LLM representation"
              className="rounded-md shadow-lg border border-gray-200"
            />
          </div>
  
          
          <div className="max-w-2xl text-justify text-gray-800 leading-relaxed">
            <p>
              I'm Arjun Santhosh, and this summer I decided to learn programming properly, this included web-development, app-development and other scripting languages like Python. Admittedly I wasn't able to explore too deeply into these topics, however 
            </p>
          </div>
        </div>
      </div>
    );
  
  }
  