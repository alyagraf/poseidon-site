export default function Steps() {
  return (
    <>
      <div className="xl:w-9/12 mx-auto">
        <div className="container mx-auto space-y-8 px-6 md:px-12 lg:px-20">
          <div>
            <h2 className="mt-10 text-start text-2xl font-bold text-gray-500 dark:text-white md:text-4xl">
              Quick & Easy 3-Step Setup
            </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 md:-mx-8 lg:grid-cols-3">
            <div className=" flex flex-wrap p-8 py-12 sm:p-12 rounded-3xl bg-slate-900 bg-slate-800 shadow-2xl outline outline-1 outline-slate-700 bg-opacity-50 shadow-2xl shadow-cyan-500/10">
              <div className="space-y-16 w-full">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full shadow-2xl outline outline-1 outline-sky-500 shadow-2xl shadow-sky-500/30">
                  <span className="font-bold text-slate-100 ">1</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-500 transition dark:text-white">
                    First step
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300">
                    After forking and cloning our application from Github, download all dependencies by typing in the terminal:
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="container mockup-code">
                    <pre data-prefix="$">
                      <code>npm i </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-8 py-12 sm:p-12 rounded-3xl bg-slate-900 bg-slate-800 shadow-2xl outline outline-1 outline-slate-700 bg-opacity-50 shadow-2xl shadow-cyan-500/10">
              <div className="space-y-16 w-full">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full shadow-2xl outline outline-1 outline-sky-500 shadow-2xl shadow-sky-500/30">
                  <span className="font-bold text-slate-100 ">2</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-500 transition dark:text-white">
                    Second step
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300">
                    Using the ReadMe in the root directory, copy over the variable labels to the .env.local file and fill out the relevant information. 
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  {/* <div className="container mockup-code">
                    <pre data-prefix="$">
                      <code>npm i </code>
                    </pre>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="flex p-8 py-12 sm:p-12 rounded-3xl bg-slate-900 bg-slate-800 shadow-2xl outline outline-1 outline-slate-700 bg-opacity-50 shadow-2xl shadow-cyan-500/10">
              <div className="space-y-2 w-full">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full shadow-2xl outline outline-1 outline-sky-500 shadow-2xl shadow-sky-500/30">
                  <span className="font-bold text-slate-100 ">3</span>
                </div>
                <div className="my-2">
                  <h3 className="text-2xl mt-6 font-semibold text-gray-500 transition dark:text-white">
                    Third step
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300">
                    If you are just using a cloud-hosted cluster, type in the following command to get started:
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="container mockup-code">
                    <pre data-prefix="$">
                      <code>npm run port </code>
                    </pre>
                  </div>
                </div>
                <div className="my-2">
                  <p className="text-gray-500 dark:text-gray-300">
                    If using cloud- and/or local-hosted clusters, type in the following to start:
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="container mockup-code">
                    <pre data-prefix="$">
                      <code>npm run forward </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
