import { UseFormRegisterReturn } from "react-hook-form";

interface DropdownProps {
    heading: string;
    itemList: string[];
    formHook: UseFormRegisterReturn;
}
const Dropdown = ({ heading, itemList, formHook }: DropdownProps) => {
    return (
        <form className="max-w-sm mx-auto">
            <label htmlFor="dropdown" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {heading}
            </label>
            <select
                {...formHook}
                id="dropdown"
                className="bg-gray-50 text-gray-900 text-sm rounded-lg 
                    focus:ring-violet-500 block w-full p-2.5 m-bg-primary-emphasis 
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500"
                defaultValue={itemList[0]}
            >
                {itemList.map((name, index) => (
                    <option value={index} key={name + index}>
                        {name}
                    </option>
                ))}
            </select>
        </form>
    );
};

export default Dropdown;
