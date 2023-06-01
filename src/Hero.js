import { useState } from 'react';
import profilePhoto from './photos/pp2.jpeg';

function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      <div className="lg:flex lg:items-center lg:justify-center lg:max-w-7xl">
        <div className="lg:w-1/2 flex items-center justify-center">
          <img src={profilePhoto} className="w-1/2 h-auto rounded-xl" alt="Profile" />
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-12 flex items-center justify-center"> 
          <div className="text-center"> 
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Sa Adat Azam Saniat
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Hey, there! I'm Saniat. I'
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;


