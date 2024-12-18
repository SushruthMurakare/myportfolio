import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";


// Local Data
import data from "../data/portfolio.json";
import Experience from "../components/Experience";
import Education from "../components/Education";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();
  const educationRef = useRef();
  const contactRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleExperienceScroll = () => {
    window.scrollTo({
      top: experienceRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleEducationScroll = () => {
    window.scrollTo({
      top: educationRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {/* {data.showCursor && <Cursor />} */}
      <Head>
        <title>{data.name}</title>
      </Head>

      {/* <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div> */}

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleExperienceScroll={handleExperienceScroll}
          handleEducationScroll={handleEducationScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="flex">
            <div className="mt-5 flex-auto">
              <h1
                ref={textOne}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
              >
                {data.headerTaglineOne}
              </h1>
              <h1
                ref={textTwo}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
                style={{ whiteSpace: "nowrap" }}
              >
                {data.headerTaglineTwo}
              </h1>
              <h1
                ref={textThree}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineThree}
              </h1>
              <h1
                ref={textFour}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineFour}
              </h1>
            </div>
            <div className="mt-5">
              <img
                src="/images/MyPic.png"
                alt="Your Image"
                className="w-80 h-auto"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Socials className="mt-2 laptop:mt-5" />
          </div>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Projects</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={educationRef}>
          <h1 className="text-2xl text-bold">Education</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-1 gap-4">
            {data.education.map((education) => (
              <Education
                key={education.id}
                institution={education.institution}
                degree={education.degree}
                location={education.location}
                graduated={education.graduated}
                gpa={education.gpa}
                relatedCourses={education.relatedCourses}
                onClick={() => window.open(education.url)}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={experienceRef}>
          <h1 className="text-2xl text-bold">Experience</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-1 gap-4">
            {data.experience.map((experience) => (
              <Experience
                key={experience.id}
                title={experience.title}
                organization={experience.organization}
                description={experience.description}
                location={experience.location}
                started={experience.started}
                ended={experience.ended}
                onClick={() => window.open(experience.url)}
              />
            ))}
          </div>
        </div>

        {/* <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div> */}
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About Me</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        {/* <div
          className="mt-10 laptop:mt-40 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow ease-out duration-300"
          ref={contactRef}
        >
          <h1 className="text-2xl font-bold mb-6">Contact Information</h1>
          <div className="space-y-4"> */}
            {/* Personal Email */}
            {/* <div className="flex items-center text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m4 0v4m0-8V4m8 8a8 8 0 11-16 0 8 8 0 0116 0z"
                />
              </svg>
              <span className="font-medium">Personal Email:</span>
              <a
                href="mailto:sushruthraomurakare@gmail.com"
                className="ml-2 text-blue-500 hover:underline"
              >
                sushruthraomurakare@gmail.com
              </a>
            </div> */}

            {/* Official Email */}
            {/* <div className="flex items-center text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m4 0v4m0-8V4m8 8a8 8 0 11-16 0 8 8 0 0116 0z"
                />
              </svg>
              <span className="font-medium">Official Email:</span>
              <a
                href="mailto:sushruth_rao@mines.edu"
                className="ml-2 text-blue-500 hover:underline"
              >
                sushruth_rao@mines.edu
              </a>
            </div> */}

            {/* LinkedIn */}
            {/* <div className="flex items-center text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 8a6 6 0 00-12 0v12h4v-6h4v6h4V8z"
                />
              </svg>
              <span className="font-medium">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/sushruthmurakare/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-500 hover:underline"
              >
                linkedin.com/in/sushruthmurakare
              </a>
            </div> */}

            {/* GitHub */}
            {/* <div className="flex items-center text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.86 8.19 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.12-3.37-1.12-.45-1.12-1.11-1.42-1.11-1.42-.91-.63.07-.62.07-.62 1.01.07 1.55 1.04 1.55 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.02-2.69-.1-.25-.44-1.27.1-2.64 0 0 .83-.26 2.72 1.02a9.58 9.58 0 015.28 0c1.89-1.28 2.72-1.02 2.72-1.02.55 1.37.21 2.39.1 2.64.63.7 1.02 1.6 1.02 2.69 0 3.84-2.35 4.7-4.58 4.94.36.31.68.93.68 1.88 0 1.36-.01 2.46-.01 2.8 0 .26.18.57.69.48A10.015 10.015 0 0022 12c0-5.52-4.48-10-10-10z"
                />
              </svg>
              <span className="font-medium">GitHub:</span>
              <a
                href="https://github.com/SushruthMurakare"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-500 hover:underline"
              >
                github.com/SushruthMurakare
              </a>
            </div> */}
          {/* </div>
        </div> */}

        {/* <Footer /> */}
      </div>
    </div>
  );
}
