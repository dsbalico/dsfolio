import { FaSadTear } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-50 dark:bg-[#101e38]">
            <div className="md:max-w-[1200px] mx-auto h-full border-x border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0e182c]">
                <div className='flex h-screen justify-center px-6'>
                    <div className='self-center text-gray-900 dark:text-gray-300'>
                        <div className='flex text-5xl justify-center font-bold gap-4'>
                            Oops! <FaSadTear />
                        </div>
                        <div className="text-center leading-7 mt-6 text-lg font-light text-gray-500 dark:text-gray-400">
                            We can&lsquo;t seem to find the page you&lsquo;re looking
                            for.
                            <br />
                            The requested URL &quot;{window.location.href}&quot; was
                            not found on this server.
                        </div>
                        <div className='text-center mt-6'>
                            <button onClick={() => navigate("/")} className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl'>Go back to homepage</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound