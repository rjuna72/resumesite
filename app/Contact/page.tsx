import Navbar from '../navbar';

export default function Home() {
  return (
    <div>
      
      

      <div className="flex flex-col  min-h-screen bg-gray-50 text-black bg-notebook bg-notebook">
      <div className='pt-8'>
      <Navbar/>
      </div>
      
        
        {/* Social Links */}

        <div className="flex space-x-4 pt-11 items-center justify-center">
          {/* GitHub */}
          <a
            href="https://github.com/rjuna72"
            target="_blank"
            rel="noopener noreferrer"
            className="[&>svg]:h-8 [&>svg]:w-8 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 496 512"
            >
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/rju"
            target="_blank"
            rel="noopener noreferrer"
            className="[&>svg]:h-8 [&>svg]:w-8 hover:text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path
                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
              />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:rjun5689@gmail.com"
            className="[&>svg]:h-8 [&>svg]:w-8 hover:text-red-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                d="M502.3 190.8L327.4 337.4c-25.1 20.8-61.6 20.8-86.8 0L9.7 190.8C3.6 186.1 0 179 0 171.4V139c0-14.9 12.1-27 27-27h458c14.9 0 27 12.1 27 27v32.4c0 7.6-3.6 14.7-9.7 19.4zM485 64H27C12.1 64 0 76.1 0 91v330c0 14.9 12.1 27 27 27h458c14.9 0 27-12.1 27-27V91c0-14.9-12.1-27-27-27zm-35 290c0 8.8-7.2 16-16 16H78c-8.8 0-16-7.2-16-16V236l167 138c9.7 8 22.1 12.4 34.5 12.4s24.8-4.4 34.5-12.4l167-138v118z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
