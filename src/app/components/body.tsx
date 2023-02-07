import Image from "next/image";
import github from "../../../public/github.png";
import hero from "../../../public/hero.png";

export default function Body() {
  return (
    <>
      <section className="px-4 pt-40 pb-20 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-10/12 xl:w-10/12 md:text-start">
          <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-slate-100 md:text-6xl md:tracking-tight">
            Empower your Kubernetes with{" "}
            <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-green-400 lg:inline">
              {" "}
              Cluster Visualizer & Cost Analysis{" "}
            </span>{" "}
            in one single place.
          </h1>
          <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-30">
            The Cluster Data Visualizer and Cost Analysis app revolutionizes
            Kubernetes optimization. Developed by top experts, it delivers cost
            estimates, stunning visualizations, and crucial insights to optimize
            deployments and stay within budget. Its user-friendly interface
            empowers organizations to make informed decisions with ease. A
            must-have for any Kubernetes pro.
          </p>
          <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-center">
              <a
                aria-label="add to slack"
                href="#"
                className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-sky-500 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                <div className="flex justify-center space-x-4">
                  <Image
                    className="invert"
                    src={github}
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                  <span className="hidden font-medium md:block dark:text-white">
                    Github
                  </span>
                </div>
              </a>
              <a
                aria-label="add to chat"
                href="#"
                className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30">
                <div className="flex justify-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 ">
                    <path
                      strokeLinecap="round"
                      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                  <span className="hidden font-medium md:block dark:text-white">
                    Watch Tutorial
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12 ">
          <Image
            className="w-full rounded-lg shadow-2xl outline outline-1 outline-slate-700"
            src={hero}
            alt="Logo"
          />
        </div>
      </section>
    </>
  );
}
