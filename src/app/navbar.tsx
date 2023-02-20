import Link from "next/link";
import Image from "next/image";
import LogoPNG from "../../public/LogoPNG.png";
import NavLinks from "./components/NavLinks";

export default function NavBar() {

  return (
    <>
      <div className="sticky top-0 z-50 w-full">
        <header className="absolute top-0 left-0 w-full flex justify-center">
          <nav className="absolute w-full">
            <div className="relative z-30 bg-slate-900 dark:bg-gray-900">
              <div className="container m-auto md:px-12 lg:py-0 lg:px-10">
                <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:gap-0">
                  <input
                    type="checkbox"
                    name="toggle_nav"
                    id="toggle_nav"
                    className="peer hidden"
                  />
                  <div className="w-full px-6 flex justify-between md:w-max md:px-0 z-30">
                    <a href="#" aria-label="logo">
                      <Image
                        className="hover:animate-[spin_6s_linear_infinite]"
                        src={LogoPNG}
                        alt="Logo"
                        width={60}
                        height={60}
                      />
                    </a>
                    <span className="ml-3 mx-auto my-auto text-white text-4xl font-extrabold px-3">
                      POSEIDON
                    </span>

                    <div className="flex items-center mx-auto my-auto  md:hidden max-h-10">
                      <label
                        role="button"
                        htmlFor="toggle_nav"
                        aria-label="humburger"
                        id="hamburger"
                        className="relative p-2">
                        <div
                          id="line"
                          className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                        <div
                          id="line2"
                          className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                      </label>
                    </div>
                  </div>
                  <label
                    htmlFor="toggle_nav"
                    className="items-stretch hidden peer-checked:block fixed w-full h-full left-0 top-0 z-10 bg-sky-200 bg-opacity-30 backdrop-blur backdrop-filter"></label>
                  <div
                    className="items-stretch hidden z-40 peer-checked:flex w-11/12 mx-auto md:mx-0 flex-col 
                            justify-end items-center gap-y-8 p-6 
                            rounded-xl bg-slate-900 dark:bg-gray-800 md:flex md:w-8/12 
                            md:gap-y-0 md:gap-x-0 md:divide-x md:p-0 
                            md:flex-row md:bg-transparent lg:w-7/12">
                    <div className="block w-full md:w-max">
                      <NavLinks />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="container h-2 -mt-6 mx-auto bg-green-400/30 dark:bg-green-900/30 blur md:-mt-4"></div>
          </nav>
        </header>
      </div>
    </>
  );
}
