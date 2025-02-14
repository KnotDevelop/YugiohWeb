import NavBar from "@/components/NavBar"
import { Link } from "react-router-dom"

const HomePage = () => {

    return (
        <div className='w-full'>
            <div className='fixed w-full z-[99]'>
                <NavBar />
            </div>
            <div className="h-[100vh] flex flex-col justify-center items-center text-white">
                <div className="w-[80%] md:w-[50%] flex flex-col justify-center items-center gap-10">
                    <img src="/images/logo.png" alt="logo" />
                    <div className="text-xl md:text-2xl font-medium text-center">
                        "Explore comprehensive Yu-Gi-Oh! card details, from stats and effects to market prices.
                        Search any card and browse every released set in one place!"
                    </div>
                    <Link
                        to={'/cardSearch'}
                        className="inline-flex items-center justify-center p-0.5 mb-2 me-2 
                        overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br 
                        from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 
                        hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 
                        dark:focus:ring-purple-800">
                        <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white 
                            dark:bg-gray-900 rounded-md group-hover:bg-transparent 
                            group-hover:dark:bg-transparent">
                            See Card Database
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage