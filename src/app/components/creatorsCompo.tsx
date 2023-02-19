import Image from "next/image";
import alina from "../../../public/alina.jpg";
import will from "../../../public/will.jpg";
import ember from "../../../public/ember.jpg";
import josh from "../../../public/josh.jpg";

export default function Creators() {
  return (
    <>
      <div className="flex flex-col items-center pt-40 bg-slate-900">
        <div className="xl:container mx-auto px-12 md:px-12">
          <div className="mb-16 ">
            <h2 className="mb-4 text-2xl font-bold text-slate-400 dark:text-white md:text-4xl">
              Meet the Team Behind the App
            </h2>
            <p className="text-slate-400 dark:text-gray-300">
              Our team of 4 experts is dedicated to helping organizations
              optimize their Kubernetes deployments and stay within budget
              constraints. With years of experience in the field, we have
              developed a user-friendly tool that provides cost estimates,
              cluster metric data visualization, and valuable insights.
            </p>
          </div>
          <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <Image
                className=""
                src={josh}
                alt="Logo"
                width={640}
                height={805}
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-slate-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                    Joshuah Edwards
                  </h4>
                  <span className="block text-sm text-gray-500">Founder</span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">
                  Artistic and logical software engineer passionate about
                  building, automation, and health tech.
                </p>
              </div>
            </div>
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <Image
                className=""
                src={will}
                alt="Logo"
                width={640}
                height={805}
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-slate-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                    Will Moody
                  </h4>
                  <span className="block text-sm text-gray-500">Founder</span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">
                  Software engineer with a passion for developing technology and
                  building full-stack applications.
                </p>
              </div>
            </div>
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <Image
                className=""
                src={ember}
                alt="Logo"
                width={640}
                height={805}
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-slate-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                    Sarah Chow
                  </h4>
                  <span className="block text-sm text-gray-500">Founder</span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">
                  A software engineer committed to exceptional projects and
                  striving for continued excellence.
                </p>
              </div>
            </div>
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <Image
                className=""
                src={alina}
                alt="Logo"
                width={640}
                height={805}
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-slate-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                    Alina Grafkina
                  </h4>
                  <span className="block text-sm text-gray-500">Founder</span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">
                  An innovative software engineer with a unique combination of
                  technical and creative skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
