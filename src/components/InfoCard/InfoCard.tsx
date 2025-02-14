interface InfoCardProps {
    cardSet: {
        set_name: string;
        set_code: string
        num_of_cards: number
        tcg_date: string
        set_image: string
    }
}

const InfoCard = ({ cardSet }: InfoCardProps) => {
    return (
        <div className="max-w-sm border border-gray-200 rounded-lg shadow-sm m-bg-primary-emphasis
        dark:border-gray-700 p-5">
            <div className="flex justify-center items-center overflow-hidden w-full h-[50%]">
                <div className="flex justify-center items-center w-full h-60">
                    {cardSet.set_image
                        ?
                        (
                            <img src={cardSet.set_image} alt="img" />
                        )
                        :
                        (
                            <img src={'/images/logo.png'} alt="img" />
                        )
                    }
                </div>
            </div>
            <div className="flex flex-col justify-between h-[50%]">
                <div className="py-3">
                    <h5 className="text-lg text-center font-bold tracking-tight
                    text-stone-200">{cardSet.set_name}</h5>
                </div>
                <div className="text-stone-300 text-end">
                    <div>
                        <span className="font-medium">Code:</span> <span className="text-violet-300">{cardSet.set_code}</span>
                    </div>
                    <div>
                        <span className="font-medium">Number of card:</span> <span className="text-violet-300">{cardSet.num_of_cards}</span>
                    </div>
                    <div>
                        <span className="font-medium">Date:</span> <span className="text-violet-300">{cardSet.tcg_date}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default InfoCard