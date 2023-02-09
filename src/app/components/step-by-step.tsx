import BtnToggle from "./btn-toggle";
import Section1 from "./section1";

export default function Setup() {
  return (
    <>
      <div className="flex flex-col items-start px-4 pt-40 pb-20 mx-auto xl:w-7/12">
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container mx-auto flex flex-col p-6">
            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <BtnToggle />
            </div>
            <Section1 />
          </div>
        </section>
      </div>
    </>
  );
}
