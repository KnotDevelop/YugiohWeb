import { UseFormRegisterReturn } from 'react-hook-form';

interface SearchBarProps {
    formHook: UseFormRegisterReturn
}
const Searchbar = ({ formHook }: SearchBarProps) => {
    return (
        <form className="max-w-sm mx-auto">
            <label htmlFor="searchBar" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Search
            </label>
            <div className="flex">
                <input
                    {...formHook}
                    id="searchBar"
                    className="bg-gray-50 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 block w-full p-2.5 m-bg-primary-emphasis
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                    placeholder="Search by Card's name" required
                >
                </input>
            </div>
        </form >
    )
}

export default Searchbar