import Navbar from '../navbar';

export default function Home() {
  return (
    <div>
      <div className="h-auto min-w-full bg-gray-50 text-black flex flex-col items-center bg-notebook p-6">
      <div className='pt-2'>
      <Navbar />
      </div>
      
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Resume</h1>
          <p className="text-gray-600 text-sm">26 Mar, 2024</p>
        </div>

        {/* Resume Content */}
        <div className="max-w-2xl text-gray-800 leading-relaxed">
          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <p>
              <strong>Queensland University of Technology</strong><br />
              Bachelor of Engineering Electrical/Aerospace (Hons)<br />
              <span className="text-sm text-gray-600">February 2024 – Present</span>
            </p>
<br />
            <p>
              <strong>Mansfield State High School</strong><br />
              ATAR 99.05<br />
              <span className="text-sm text-gray-600">February 2018 – November 2023</span>
            </p>
          </section>

          
          {/* Experience Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>

            <div className="mb-4">
  <strong>
    <a 
      href="https://savr.au" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-600 hover:underline"
    >
      Savr.au
    </a>
  </strong>
  | Co-Founder and Lead Software Engineer<br />
  <span className="text-sm text-gray-600">October 2024 – Present</span>
  <ul className="list-disc ml-5 mt-2">
    <li>Won $2000 funding for a unique startup idea</li>
    <li>Currently in the process of developing the idea and bringing it to market</li>
  </ul>
</div>


            <div className="mb-4">
              <strong>180 Degrees Consulting</strong> | Consultant<br />
              <span className="text-sm text-gray-600">June 2024 – Present</span>
              <ul className="list-disc ml-5 mt-2">
                <li>Created a Go-To-Market strategy for a new product in the assisted sports sector</li>
                <li>Performed market analysis and SWOT on competitors</li>
                <li>Developed and pitched a plan for NDIS affiliation to the company board</li>
              </ul>
            </div>

            <div className="mb-4">
              <strong>Shield Tutoring</strong> | Tutor<br />
              <span className="text-sm text-gray-600">April 2024 – Present</span>
              <ul className="list-disc ml-5 mt-2">
                <li>Helped neurodivergent students overcome learning difficulties</li>
                <li>Identified student weaknesses and assisted them in overcoming challenges</li>
                <li>Consulted with parents on optimizing student learning</li>
              </ul>
            </div>

            <div className="mb-4">
              <strong>Sugo Tu</strong> | Assembly Line Worker<br />
              <span className="text-sm text-gray-600">April 2021 – March 2024</span>
              <ul className="list-disc ml-5 mt-2">
                <li>Managed ingredient measurement software and implemented recipes</li>
                <li>Maintained cleanliness and accuracy in fast-paced environments</li>
                <li>Increased productivity by multitasking across stations</li>
              </ul>
            </div>

            <div className="mb-4">
              <strong>Lakshmi Designs</strong> | Administrative Officer<br />
              <span className="text-sm text-gray-600">January 2023 – November 2023</span>
              <ul className="list-disc ml-5 mt-2">
                <li>Managed inventory, payments, emails, and shipments</li>
                <li>Handled business accounts using Xero, ensuring invoices and payroll accuracy</li>
                <li>Worked overtime to meet customer orders and ensure satisfaction</li>
              </ul>
            </div>
          </section>

          

          {/* Technical Skills Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
            <p>
              <strong>Languages:</strong> Python, C, C++, HTML/CSS, JavaScript, MATLAB, SQL<br />
              <strong>Frameworks:</strong> React.js, Ruby on Rails, ATtiny 1626, Next.js
            </p>
          </section>


          {/* Volunteering Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Volunteering</h2>

            <div className="mb-4">
              <strong>QUT Connector</strong><br />
              <span className="text-sm text-gray-600">May 2024 – Present</span>
              <ul className="list-disc ml-5 mt-2">
                <li>Assisted setup and packing at QUT Dragon Boat Regatta</li>
                <li>Engaged with the community and gathered feedback to improve events</li>
              </ul>
            </div>

            <div className="mb-4">
              <strong>TEDxQUT</strong><br />
              <span className="text-sm text-gray-600">October 2024 – November 2024</span>
              <ul className="list-disc ml-5 mt-2">
                <li>Assisted setup and packing at TEDxQUT events</li>
                <li>Helped collect feedback to improve future events</li>
              </ul>
            </div>

            <div className="mb-4">
              <strong>Student Catchment Internship Program</strong><br />
              <span className="text-sm text-gray-600">October 2024</span>
              <ul className="list-disc ml-5 mt-2">
                <li>Volunteered with local catchment groups</li>
                <li>Learned about local flora and engineered solutions to environmental threats</li>
              </ul>
            </div>

            <div className="mb-4">
              <strong>Samskruthi</strong><br />
              <span className="text-sm text-gray-600">August 2020 – Present</span>
              <ul className="list-disc ml-5 mt-2">
                <li>Assisted in event setup and packing</li>
                <li>Engaged with attendees to ensure smooth operations</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
