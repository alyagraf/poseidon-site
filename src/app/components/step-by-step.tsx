import BtnToggle from "./btn-toggle";
import Section1 from "./section1";

export default function Setup() {
  return (
    <>
      <div className="flex flex-col items-start px-4 pt-40 pb-20 mx-auto xl:w-7/12">
      <BtnToggle />
      <Section1 />
      </div>
    </>
  );
}
