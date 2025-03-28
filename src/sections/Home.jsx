import Typewriter from 'typewriter-effect';

import profilemg from "../assets/profilemg.jpg";
import profileimg from "../assets/profilemg1.png";
import { FiDownload } from "react-icons/fi";
import resume from "../assets/resume.pdf";

import { TypeAnimation } from 'react-type-animation';
function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-15 z-2 overflow-clip"
    >
      <div className="hover:shadow-gray-500/50 hover:scale-105 hover:shadow-xl rounded-full transition-all duration-200 text-center mt-20 lg:m-0 z-[0] relative flex justify-center items-center size-[300px] sm:size-[400px] lg:max-w-[300px] lg:max-h-[300px]">
        <img
          className="size-[350px] sm:w-[350px] border-0 rounded-full shadow-lg shadow-gray-600/70  lg:max-w-[360px] object-fit object-bottom transition-all transform aspect-square"
          src={profilemg}
          alt="Saurabh Suman Image"
        />
        {/*<div className="absolute inset-0 flex justify-center items-center h-full w-full aspect-square">
          <div className="moving-circle h-full w-full"></div>
        </div>*/}
      </div>

      <div className="text-center font-mono px-4 xl:w-[60%] z-50">
        <h1 className="text-4xl md:text-5xl xl:text-6xl w-full max-w-full font-semibold mb-6 px-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent leading-none text-wrap">
          <span>I am</span>&nbsp;
          <TypeAnimation
            sequence={[
              'Saurabh Suman', // First part
              3000,
              'Frontend Developer', // Second part
              3000,
              () => { },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ whiteSpace: 'break-spaces' }}
          />

        </h1>

        <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
        Dedicated and enthusiastic Computer Science student with a strong foundation in data structures, algorithms, and web development. Passionate about problem-solving, coding, and building user-friendly applications.Eager to contribute and grow in a dynamic tech environment
        </p>
        <div className="flex justify-center items-center space-x-10">
          <a href='#contact' className="contactbutton text-white hover:bg-white hover:text-black">
            Contact Me
            <div className="star-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                version="1.1"
                style={{
                  shapeRendering: 'geometricPrecision',
                  textRendering: 'geometricPrecision',
                  imageRendering: 'optimizeQuality',
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                }}
                viewBox="0 0 784.11 815.53"
              >
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </svg>
            </div>
            <div className="star-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                version="1.1"
                style={{
                  shapeRendering: 'geometricPrecision',
                  textRendering: 'geometricPrecision',
                  imageRendering: 'optimizeQuality',
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                }}
                viewBox="0 0 784.11 815.53"
              >
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </svg>
            </div>
            <div className="star-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                version="1.1"
                style={{
                  shapeRendering: 'geometricPrecision',
                  textRendering: 'geometricPrecision',
                  imageRendering: 'optimizeQuality',
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                }}
                viewBox="0 0 784.11 815.53"
              >
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </svg>
            </div>
            <div className="star-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                version="1.1"
                style={{
                  shapeRendering: 'geometricPrecision',
                  textRendering: 'geometricPrecision',
                  imageRendering: 'optimizeQuality',
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                }}
                viewBox="0 0 784.11 815.53"
              >
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </svg>
            </div>
            <div className="star-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                version="1.1"
                style={{
                  shapeRendering: 'geometricPrecision',
                  textRendering: 'geometricPrecision',
                  imageRendering: 'optimizeQuality',
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                }}
                viewBox="0 0 784.11 815.53"
              >
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </svg>
            </div>
            <div className="star-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                version="1.1"
                style={{
                  shapeRendering: 'geometricPrecision',
                  textRendering: 'geometricPrecision',
                  imageRendering: 'optimizeQuality',
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                }}
                viewBox="0 0 784.11 815.53"
              >
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </svg>
            </div>
          </a>

          <a
            href={resume}
            download
          >
            <button className="button py-6 rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]  font-medium transition " type="button">
              <span className="button__text">Resume</span>
              <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
