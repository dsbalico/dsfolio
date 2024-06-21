import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";

function Hero() {
  return (
    <section className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 md:px-24">
      <div className="self-center">
        <img
          src={user_info.main.photo}
          className="rounded-full w-20 mb-6 lg:hidden"
        />
        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
          <div className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center">
            <h2 className="text-xl">{user_info.main.role}</h2>
            <h1 className="font-black mt-3 text-5xl lg:w-[85%]">
              {user_info.main.name}
            </h1>

            <p className="mt-6 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7">
              {user_info.main.description}
            </p>

            <div className="flex gap-2 mt-6">
              <a
                href="#projects"
                className="px-6 py-3 bg-red-800 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4"
              >
                <span className="self-center font-medium">Contact</span>
                <IoIosArrowForward className="self-center" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block w-[480px] self-center">
            <img
              className="rounded-[10%] transform rotate-3"
              src={user_info.main.photo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
