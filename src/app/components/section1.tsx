export default function Section1() {
    return (
      <>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container mx-auto flex flex-col p-6">
            <div className="divide-y divide-gray-700">
              <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-xs tracking-wider uppercase dark:text-violet-400">Step 1 - Nihil</span>
                  <span className="text-xl font-bold md:text-2xl">Veritatis dolores</span>
                  <span className="mt-4 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.</span>
                </div>
              </div>
              <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-xs tracking-wider uppercase dark:text-violet-400">Step 2 - Explicabo</span>
                  <span className="text-xl font-bold md:text-2xl">Iure incidunt labore</span>
                  <span className="mt-4 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.</span>
                </div>
              </div>
              <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                {/* <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                </div> */}
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-xs tracking-wider uppercase dark:text-violet-400">Step 3 - Facilis</span>
                  <span className="text-xl font-bold md:text-2xl">Dolorem praesentium</span>
                  <span className="mt-4 dark:bg-gray-800 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.</span>
                </div>
              </div>
              <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                {/* <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                </div> */}
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-xs tracking-wider uppercase dark:text-violet-400">Step 4 - Aperiam</span>
                  <span className="text-xl font-bold md:text-2xl">Explicabo eaque</span>
                  <span className="mt-4 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  