
interface PaginationProps {
    currentPage: number;
    maxPage: number;
    onNext: () => void;
    onPrevious: () => void
}

const Pagination = ({ currentPage, maxPage, onNext, onPrevious }: PaginationProps) => {


    const handleNext = () => {
        onNext()
    }
    const handlePrevious = () => {
        onPrevious()
    }

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="font-medium tracking-wide text-gray-200">{currentPage + 1}/{maxPage + 1} Pages</div>
            <div className="flex gap-5">
                {/* <!-- Previous Button --> */}
                <a
                    href="#" onClick={handlePrevious}
                    className="inline-flex items-center justify-center p-0.5 mb-2 me-2 
                        overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br 
                        from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 
                        hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 
                        dark:focus:ring-purple-800">
                    <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white 
                            dark:bg-gray-900 rounded-md group-hover:bg-transparent 
                            group-hover:dark:bg-transparent">
                        Previous Page
                    </span>
                </a>

                {/* <!-- Next Button --> */}
                <a
                    href="#" onClick={handleNext}
                    className="inline-flex items-center justify-center p-0.5 mb-2 me-2 
                        overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br 
                        from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 
                        hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 
                        dark:focus:ring-purple-800">
                    <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white 
                            dark:bg-gray-900 rounded-md group-hover:bg-transparent 
                            group-hover:dark:bg-transparent">
                        Next Page
                    </span>
                </a>
            </div>

        </div>
    )
}

export default Pagination