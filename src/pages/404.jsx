import { FaSadTear } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="bg-zinc-50 dark:bg-zinc-900">
            <div className="md:max-w-[1200px] mx-auto h-full border-x border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                <div className='flex h-screen justify-center px-6'>
                    <div className='self-center text-zinc-900 dark:text-zinc-300'>
                        <div className='flex text-5xl justify-center font-bold gap-4'>
                            Oops! <FaSadTear />
                        </div>
                        <div className="text-center leading-7 mt-6 text-lg font-light text-zinc-500 dark:text-zinc-400">
                            We can&lsquo;t seem to find the page you&lsquo;re looking
                            for.
                            <br />
                            The requested URL &quot;{window.location.href}&quot; was
                            not found on this server.
                        </div>
                        <div className='text-center mt-6'>
                            <button onClick={() => navigate("/")} className='bg-red-800 hover:bg-red-700 text-white px-6 py-4 rounded-xl'>Go back to homepage</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound