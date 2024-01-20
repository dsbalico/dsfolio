import { CiLink } from "react-icons/ci";

function Project({ theme, title, description, technologies, link, github }) {
  return (
    <div className="hover:bg-gray-50 hover:dark:bg-[#101e38] transition-all duration-300 p-6 md:rounded-xl">
        <img className="w-60" src={technologies + theme} />
        <h3 className="font-bold text-lg text-gray-700 dark:text-gray-300 mt-4">{ title }</h3>
        <p className="leading-7 text-gray-500 dark:text-gray-400 font-light text-sm mt-4">{ description }</p>
        
        <div className="flex gap-6 text-gray-500 dark:text-gray-400 font-medium">
            <a className="flex gap-2 mt-4 hover:text-blue-600 cursor-pointer transition-all duration-300">
                <CiLink className="text-2xl self-center" />
                <a href={link} className="text-xs self-center">View Project</a>
            </a>
            <a className="flex gap-2 mt-4 hover:text-blue-600 cursor-pointer transition-all duration-300">
                <CiLink className="text-2xl self-center" />
                <a href={github} className="text-xs self-center">View Github</a>
            </a>
            </div>
    </div>
  )
}

export default Project