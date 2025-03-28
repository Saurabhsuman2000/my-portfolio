import RevealOnScroll from "../Ui/RevealOnScroll";

function About() {
  const skills = [
    "Html",
    "Css",
    "Javascript",
    "React",
    "TailwindCSS",
    "MongoDB",
  ];
  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="max-w-4xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            About Me
          </h2>
          <div className="p-8 mb-6 rounded-xl border-2 border-white/10 hover:-translate-y-1 transition-all">
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-gray-300 mb-5 text-xl"
            >
              🚀 Passionate and driven Computer Science student with a knack for problem-solving, coding, and crafting engaging web experiences. Skilled in data structures, algorithms, and front-end development, I thrive on challenges that push me to innovate. Excited to learn, grow, and make an impact in the tech world! 💡✨
            </p>

            <div className="text-center p-5 font-sans text-gray-200">
              <h2 className="text-2xl font-bold mb-1">Saurabh Suman</h2>
              <p className="text-lg">Frontend Developer</p>
              <p className="mt-2">📍 Adarsh Nagar, Samastipur</p>
              <p>
                📞{" "}
                <a href="tel:+918539854397" className="hover:text-blue-400">
                  8539854397
                </a>
              </p>
              <p>
                📧{" "}
                <a
                  href="mailto:saurabhsuman720@gmail.com"
                  className="hover:text-blue-400"
                >
                  saurabhsuman720@gmail.com
                </a>
              </p>
              <p className="mt-2">
                🔗{" "}
                <a
                  href="https://github.com/Saurabhsuman2000"
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">💼 Skills</h3>
              <div className="flex justify-center flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">
                📚 Education
              </h3>
              <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
                <li>
                  <strong>
                    {" "}
                    <em>B.Tech in Computer Science </em>{" "}
                  </strong>
                  Makaut University (2022-2026)
                </li>
                <li>CS fundamental, Data Structure, Web Development..</li>
              </ul>
            </div>
          </div>
          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">
              💻 Work Experience
            </h3>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
              <li>
                <strong className="text-blue-400">
                  <em>Frontend Developer (Freelance / Contract)</em>
                </strong>
                📍
                <br />* Remote | Jan 2025 - Present <br />
                - Built responsive and accessible websites using React.js and Tailwind CSS <br />- Developed dynamic user
                interfaces with JavaScript, HTML, and CSS. <br />- Integrated
                RESTful APIs and optimized performance for faster load times.
              </li>
              <li>
                Applied CS fundamentals, data structures,Web development.. and
                best practices to enhance scalability and maintainability.
              </li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
