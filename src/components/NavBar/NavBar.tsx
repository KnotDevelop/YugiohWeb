import { useState } from "react"
import { Link } from "react-router-dom"

const NavBar = () => {

    const [isPanel, setIsPanel] = useState(false)

    return (
        <nav className="border-gray-200 m-bg-primary">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/images/logo.png" className="h-8" alt="Logo" />
                </Link>
                <button
                    onClick={() => setIsPanel(!isPanel)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 
                            rounded-lg md:hidden text-gray-400 hover:bg-gray-700 focus:ring-gray-600">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isPanel ? '' : 'hidden'} w-full md:block md:w-auto`}>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 
                    rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <Link
                                to={'/'}
                                className="block py-2 px-3 text-gray-900
                                    border-0 p-0 
                                    text-white 
                                    hover:text-violet-300"
                                aria-current="page">Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/cardSearch'}
                                className="block py-2 px-3 text-gray-900
                                    border-0 p-0 
                                    text-white 
                                    hover:text-violet-300">Card Database
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/archetype'}
                                className="block py-2 px-3 text-gray-900
                                    border-0 p-0 
                                    text-white 
                                    hover:text-violet-300">Archetype
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={`/cardSet`}
                                className="block py-2 px-3 text-gray-900
                                    border-0 p-0 
                                    text-white 
                                    hover:text-violet-300">Card Set
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={`/randomCard`}
                                className="block py-2 px-3 text-gray-900 
                                    border-0 p-0 
                                    text-white 
                                    hover:text-violet-300">Random Card
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar