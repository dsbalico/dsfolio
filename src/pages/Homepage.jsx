import { FaFacebook, FaInstagram, FaTelegramPlane, FaArrowCircleUp   } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter, FaLinkedin  } from "react-icons/fa6";
import Project from "../components/Project";
import { FaLandmark } from "react-icons/fa";
import user_info from "../data/user_info.js"; 
import ToggleTheme from "../components/ToggleTheme.jsx";
import { AppContext } from "../App.jsx";
import { useContext } from "react";
import GitHubButton from 'react-github-btn'
import { IoIosArrowForward } from "react-icons/io";

function Homepage() {
    const {theme, switchTheme} = useContext(AppContext);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="bg-gray-50 dark:bg-[#101e38]">
            <div className="lg:w-[1200px] md:mx-auto h-full border-x border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0e182c]">
                <ToggleTheme switchTheme={switchTheme} />

                {/* Landing */}
                <div className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 md:px-24">
                    <div className="self-center">
                        <img src={user_info.main.photo} className="rounded-full w-20 mb-6 lg:hidden" />
                        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
                            <div className="lg:w-[80%] text-gray-900 dark:text-gray-100 self-center">
                                <h2 className="text-xl">{user_info.main.role}</h2>
                                <h1 className="font-black mt-3 text-5xl lg:w-[85%]">{user_info.main.name}</h1>
                                
                                <p className="mt-6 dark:text-gray-300 text-base font-light lg:w-[87%] leading-7">{user_info.main.description}</p>

                                <div className="flex gap-2 mt-6">
                                    <a href="#projects" className="px-6 py-3 border border-gray-900 dark:border-gray-100 hover:bg-blue-600 transition-all hover:text-gray-100 duration-300">Projects</a>
                                    <a href="#contact" className="px-6 py-3 hover:text-blue-600 transition-all duration-300 flex gap-3 hover:gap-4">
                                        <span className="self-center">Contact</span>
                                        <IoIosArrowForward className="self-center" />
                                    </a>
                                </div>

                                {/* <div className="flex mt-8 gap-4">
                                    <a href={user_info.socials.facebook} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><FaFacebook className="inline-block text-3xl" /></a>
                                    <a href={user_info.socials.instagram} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><FaInstagram className="inline-block text-3xl" /></a>
                                    <a href={user_info.socials.twitter} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><FaSquareXTwitter className="inline-block text-3xl" /></a>
                                    <a href={user_info.socials.linkedin} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><FaLinkedin className="inline-block text-3xl" /></a>
                                    <a href={user_info.socials.github} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><FaGithub className="inline-block text-3xl" /></a>
                                    <a href={`mailto:${user_info.main.email}`} rel="noreferrer" target="_blank" className="text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300"><MdEmail className="inline-block text-3xl" /></a>                     
                                </div> */}
                            </div>

                            <div className="hidden lg:block w-[480px] self-center">
                                <img className="rounded-[10%] transform rotate-3" src={user_info.main.photo} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects */}
                <div id="projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 md:px-16">
                    {
                        user_info.projects.map((project, index) => {
                            return (
                                <Project key={index} theme={theme} title={project.title} description={project.description} technologies={project.technologies} github={project.github} link={project.link} />
                            )
                        })
                    }
                </div>

                {/* Skills & Education */}
                <div className="flex flex-wrap lg:flex-nowrap justify-between gap-12 mt-20 md:px-16">
                    {/* Skills */}
                    <div>
                        <div className="p-6 hover:bg-gray-50 transition-all duration-300 hover:dark:bg-[#101e38] md:rounded-xl">
                            <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300">Programming Languages</h4>
                            <p className="leading-7 mt-2 text-base font-light text-gray-500 dark:text-gray-300">{user_info.skills.languages.description}</p>
                            <img className="w-48 mt-4" src={user_info.skills.languages.image + theme} />
                        </div>
                        <div className="p-6 hover:bg-gray-50 transition-all duration-300 hover:dark:bg-[#101e38] md:rounded-xl">
                            <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300">Frameworks & Libraries</h4>
                            <p className="leading-7 mt-2 text-base font-light text-gray-500 dark:text-gray-300">{user_info.skills.frameworks.description}</p>
                            <img className="w-48 mt-4" src={user_info.skills.frameworks.image + theme} />
                        </div>
                        <div className="p-6 hover:bg-gray-50 transition-all duration-300 hover:dark:bg-[#101e38] md:rounded-xl">
                            <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300">Tools & Platforms</h4>
                            <p className="leading-7 mt-2 text-base font-light text-gray-500 dark:text-gray-300">{user_info.skills.tools.description}</p>
                            <img className="w-48 mt-4" src={user_info.skills.tools.image + theme} />
                        </div>
                    </div>

                    {/* Education */}
                    <div className="w-full px-2 lg:px-0 lg:w-[70%]">
                        <div className="border dark:border-gray-500 p-8 rounded-xl">
                            <div className="flex gap-4">
                                <FaLandmark className="self-center text-gray-500 dark:text-gray-300" />
                                <h4 className="text-gray-500 dark:text-gray-300 self-center">Education</h4>
                            </div>

                            {
                                user_info.education.map((education, index) => {
                                    return (
                                        <div key={index} className="flex gap-4 mt-8">
                                            <img className="h-10 w-10 rounded-full" src={education.image} />
                                            <div className="w-full">
                                                <h5 className="font-medium text-gray-600 dark:text-gray-300">{education.school}</h5>
                                                <div className="flex justify-between">
                                                    <p className="text-gray-500 dark:text-gray-300 text-xs w-full">{education.degree}</p>
                                                    <p className="text-gray-500 dark:text-gray-300 text-right w-[50%] text-xs">{education.year}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            
                        </div>
                    </div>
                </div>

                {/* Contact */}
                <div id="contact" className="mt-12 pt-12 px-6 md:px-24">
                    <h4 className="text-5xl font-bold text-gray-900 dark:text-gray-100">{user_info.contact.title}</h4>

                    <p className="mt-8 leading-7 text-base text-gray-500 dark:text-gray-300 font-light">{user_info.contact.description}</p>
                
                    <div className="mt-12">
                        <a href={user_info.socials.facebook} className="flex gap-4 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300  hover:text-gray-700 transition-all duration-300">
                            <FaFacebook className="self-center text-lg" />
                            <span className="self-center">Follow on Facebook</span>
                        </a>
                        <a href={user_info.socials.twitter} className="flex gap-4 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300 mt-4">
                            <FaSquareXTwitter className="self-center text-lg" />
                            <span className="self-center">Follow on Twitter</span>
                        </a>
                        <a href={user_info.socials.instagram} className="flex gap-4 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300 mt-4">
                            <FaInstagram className="self-center text-lg" />
                            <span className="self-center">Follow on Instagram</span>
                        </a>
                        <a href={user_info.socials.linkedin} className="flex gap-4 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300 mt-4">
                            <FaLinkedin className="self-center text-lg" />
                            <span className="self-center">Follow on Linkedin</span>
                        </a>
                    </div>

                    <hr className="mt-6 w-72 border dark:border-gray-800" />

                    <a href={`mailto:${user_info.main.email}`} className="flex mt-6 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 gap-4 hover:text-gray-700 transition-all duration-30">
                        <MdEmail className="self-center text-lg" />
                        <span>{ user_info.main.email }</span>
                    </a>

                    <a href={user_info.socials.telegram} className="flex mt-6 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 gap-4 hover:text-gray-700 transition-all duration-30">
                        <FaTelegramPlane   className="self-center text-lg" />
                        <span>Message on Telegram</span>
                    </a>
                </div>

                <hr className="mt-12 border border-gray-300 dark:border-gray-700" />
                
                {/* Footer */}
                <footer className="p-4 text-center md:flex justify-between">
                    <GitHubButton className="self-center" href="https://github.com/dsbalico/dsfolio" data-color-scheme={theme} data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star dsbalico/dsfolio on GitHub">Star on Github</GitHubButton>
                    <p className="text-gray-500 self-center mt-2 md:mt-0 dark:text-gray-300 text-sm text-center font-light">{user_info.footer}</p>
                    <button onClick={() => scrollToTop()} className="text-gray-500 self-center mt-2 md:mt-0 dark:text-gray-300 mx-auto md:mx-0 text-sm font-light flex gap-2"><FaArrowCircleUp className="self-center" /> Go back to top</button>
                </footer>
            </div>
        </div>
    )
}

export default Homepage