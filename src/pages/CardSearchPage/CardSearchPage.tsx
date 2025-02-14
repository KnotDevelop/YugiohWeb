import { useCardListStore } from '@/store/CardDataStore'
import SearchForm from '@/components/SearchForm'
import CardShow from '@/components/CardShow'
import Pagination from '@/components/Pagination';
import { useEffect, useState } from 'react';
import NavBar from "@/components/NavBar"
import Loading from '@/components/Loading';

const CardSearchPage = () => {
    const { fetchCard, pages } = useCardListStore()
    const [currentPage, setCurrentPage] = useState<number>(0)
    const maxPage = pages.length - 1;

    const previousPage = () => {
        if (currentPage > 0)
            setCurrentPage(currentPage - 1);
    }

    const nextPage = () => {
        if (currentPage < maxPage)
            setCurrentPage(currentPage + 1);
    }

    useEffect(() => {
        setCurrentPage(0)
    }, [pages])

    return (
        <div className='w-full'>
            <div className='fixed w-full z-[99]'>
                <NavBar />
                <SearchForm />
            </div>
            <div className='pt-[95px] '></div>
            <div className='flex flex-col items-center py-8'>
                <Pagination currentPage={currentPage} maxPage={maxPage} onNext={nextPage} onPrevious={previousPage} />
            </div>
            {fetchCard.loading ? (
                <Loading />
            )
                : (
                    <div className='flex justify-center'>
                        {pages && pages.length > 0 ?
                            <div className='w-[80%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5'>
                                {
                                    pages[currentPage].data?.map((c) => {
                                        return <CardShow key={c.id} card={c} />
                                    })
                                }
                            </div>
                            : <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
                                No cards available
                            </div>}
                    </div>
                )
            }
            <div className='flex justify-center py-8'>
                <Pagination currentPage={currentPage} maxPage={maxPage} onNext={nextPage} onPrevious={previousPage} />
            </div>
        </div>
    )
}

export default CardSearchPage