export default function Home() {
  return (
    <div>


      <div className="h-auto min-w-full bg-gray-50 text-black flex flex-col items-center p-6">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Writer Detection With LLM Latent Space Images</h1>
          <p className="text-gray-600 text-sm">26 Mar, 2024</p>
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
            I remember reading the introduction to Jessica Livingston’s Founders at Work
            and thinking how much it sounded just like Paul Graham. Only to realize it
            was written by him. Something about the way he writes is very distinguishable...
          </p>
        </div>
      </div>
    </div>
  );

}
