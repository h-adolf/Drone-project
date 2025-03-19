import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Column - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <span className="text-sm text-gray-500 uppercase tracking-widest">
            About us
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Your journey to drone mastery starts here
          </h1>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam natus error sit voluptatem accusantium doloremque laudantium.
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed">
            Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas.
          </p>
          <a
            href="/about"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            About Us
          </a>
        </div>

        {/* Right Column - Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1521405924368-64c5b84bec60?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
