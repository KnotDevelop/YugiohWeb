import { useState } from "react";
import Searchbar from "../Searchbar";
import Dropdown from "../Dropdown";
import { type, race, frameType, sort } from "@/utils/CardFilterData"
import { useSearchForm } from "./SearchForm.hook";

const SearchForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { typeKeyWord, raceKeyWord, frameTypeKeyWord, sortKeyWord, searchKeyWord } = useSearchForm()

    return (
        <div id="accordion-color">
            <h2 id="accordion-color-heading-1">
                <button
                    type="button"
                    className={`flex items-center justify-between w-full px-8 py-2 font-medium 
                    rtl:text-right text-gray-200 focus:ring-4 focus:ring-violet-800
                     ${isOpen ? "m-bg-primary-emphasis" : "m-bg-primary-emphasis"}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-controls="accordion-color-body-1"
                >
                    <span>Filter</span>
                    <svg
                        className={`w-3 h-3 transform ${isOpen ? "rotate-180" : "rotate-0"} transition-transform`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            {isOpen && (
                <div id="accordion-color-body-1" aria-labelledby="accordion-color-heading-1">
                    <div className="p-5 border-gray-700 m-bg-info">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-3 px-6">
                            <div>
                                <Dropdown heading="Type" itemList={type} formHook={typeKeyWord} />
                            </div>
                            <div>
                                <Dropdown heading="Race" itemList={race} formHook={raceKeyWord} />
                            </div>
                            <div>
                                <Dropdown heading="FrameType" itemList={frameType} formHook={frameTypeKeyWord} />
                            </div>
                            <div>
                                <Dropdown heading="Sort" itemList={sort} formHook={sortKeyWord} />
                            </div>
                            <div>
                                <Searchbar formHook={searchKeyWord} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchForm;
