import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import weather from "../assets/weather_appimg.png";
import ecommerce from "../assets/e-commerce-app.jpg";
import expense from "../assets/expense_tracker.png";
import travel from "../assets/travel-app.jpg";
import RevealOnScroll from "../Ui/RevealOnScroll";

function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const projects = [
    {
      image: weather,
      name: "Weather App",
      brief:
        "Developed a weather forecasting app using HTML, CSS, JavaScript, and React.js, featuring real-time weather updates, API integration, and a responsive UI.",
      skills:["HTML","CSS","Javascript"]
    },
    {
      image: ecommerce,
      name: "E-Commerce App",
      brief:
        "Developed an e-commerce website using HTML, CSS, JavaScript, and React.js, featuring product listings, a shopping cart, user authentication, and a responsive UI.",
      skills:["React","Node","Express","MongoDb"]
    },
    {
      image: expense,
      name: "Expense_tracker",
      brief:
        "Developed a food delivery app using HTML, CSS, JavaScript, and React.js, featuring restaurant listings, online ordering, a shopping cart, and a responsive UI.",
      skills:["HTML","Tailwind","Javascript"]
    },
    {
      image: travel,
      name: "Travel App",
      brief:
        "Developed a travel booking app using HTML, CSS, JavaScript, and React.js, featuring destination listings, booking functionality, user authentication, and a responsive UI.",
      skills:["React","CSS","Javascript"]
    },
  ];

  const handlePrev = () => {
    setCurrentProjectIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? projects.length - 1 : newIndex;
    });
  };

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= projects.length ? 0 : newIndex;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const displayedProjects =
    windowWidth < 640
      ? [projects[currentProjectIndex]]
      : [
          projects[currentProjectIndex],
          projects[(currentProjectIndex + 1) % projects.length], // ensures wrap-around on the second column
        ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="relative">
            {/* Project Grid */}
            <div
              className={`grid ${
                windowWidth < 640 ? "grid-cols-1" : "grid-cols-2"
              } gap-6 transition-all duration-300`}
            >
              {displayedProjects.map((project, index) => (
                <div
                  key={index}
                  data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900"
                >
                  <h3 className="font-semibold text-xl mb-4">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.brief}</p>

                  <div className="flex-1 flex flex-wrap sm:items-center gap-2 mb-4">
                    {project.skills.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full hover:bg-blue-500/20 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Section */}
                  <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] cursor-pointer rounded-xl ">
                    <p className="text-gray-200">View Project</p>
                    <a
                      href="https://github.com/Saurabhsuman2000"
                      className="flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white"
                    >
                      <img
                        src={project.image}
                        alt={`${project.name} Image`}
                        className="w-full h-60 object-cover rounded-md"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Left & Right Navigation */}
            <div
              className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 cursor-pointer transition lg:-left-12"
              onClick={handlePrev}
            >
              <FiChevronLeft className="text-white text-3xl" />
            </div>
            <div
              className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 cursor-pointer transition lg:-right-12"
              onClick={handleNext}
            >
              <FiChevronRight className="text-white text-3xl" />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
