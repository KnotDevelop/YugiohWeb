import NavBar from "@/components/NavBar"
import { AllCardSetSevice } from '@/service/index'
import { useEffect, useRef, useState } from "react"
import InfoCard from "@/components/InfoCard"

type setType = {
    data: {
        set_name: string;
        set_code: string
        num_of_cards: number
        tcg_date: string
        set_image: string
    }[] | undefined;
    loading: boolean;
    error: null | unknown;
}

const CardSetPage = () => {
    const [setCard, setSetCard] = useState<setType>({ data: undefined, loading: false, error: null })

    const loadCardData = async () => {
        setSetCard({ data: undefined, loading: true, error: null });
        try {
            const res = await AllCardSetSevice();
            if (res.status === 200 && res.data) {
                setSetCard({ data: res.data, loading: false, error: null });
            } else {
                setSetCard({ data: undefined, loading: false, error: 'No data found' });
            }
        } catch (error) {
            setSetCard({ data: undefined, loading: false, error });
        }
    }

    const called = useRef(false)
    useEffect(() => {
        if (!called.current) {
            loadCardData()
            called.current = true
        }
    }, [])

    return (
        <div className='w-full'>
            <div className='fixed w-full z-[99]'>
                <NavBar />
            </div>
            <div className='pt-[90px] '></div>
            <div className="flex flex-col items-center text-white">
                <div className="w-[80%] flex flex-col items-center">
                    <div className="py-5 font-bold text-3xl">Card Set</div>
                    {!setCard.loading
                        ?
                        (
                            <div className="grid 
                            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                                {setCard.data?.map((cardSet) => {
                                    return <InfoCard key={cardSet.set_name} cardSet={cardSet} />
                                })}
                            </div>
                        )
                        :
                        null}
                </div>
            </div>
        </div>
    )
}

export default CardSetPage