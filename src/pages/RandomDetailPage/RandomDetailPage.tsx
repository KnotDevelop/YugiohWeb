import CardShow from "@/components/CardShow";
import NavBar from "@/components/NavBar";
import { useRandomDetailPage } from './RandomDetailPage.hook';
import Loading from "@/components/Loading";

const RandomDetailPage = () => {
    const { randomCard, archetype } = useRandomDetailPage();

    return (
        <div className="min-h-[100vh]">
            {randomCard.loading && randomCard.data ?
                (
                    <Loading />
                )
                :
                (
                    <div>
                        {/* Header */}
                        <div className='fixed w-full z-[99]'>
                            <div className='fixed w-full z-[99]'>
                                <NavBar />
                            </div>
                        </div>
                        {/* Card Info */}
                        <div className="relative">
                            <div className="absolute m-bg-info w-full h-full opacity-50"></div>
                            <div className="relative flex flex-col items-center text-stone-50 font-normal text-base 
                 pt-[120px]">
                                <div className="font-bold text-stone-50 text-2xl md:text-3xl text-center px-10">{randomCard.data?.name}</div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[800px] p-10
                rounded-[10px] m-2">
                                    <div className="flex justify-center md:justify-start">
                                        <img src={randomCard.data?.card_images?.[0]?.image_url_small ??
                                            randomCard.data?.card_images?.[0]?.image_url_cropped}
                                            alt="card image" className="w-[250px] h-auto shadow-lg 
                        shadow-gray-300/50" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-stone-50 text-lg">Card Info</div>
                                        <table className="table-auto border-separate border-spacing-y-2">
                                            <tbody>
                                                {randomCard.data?.id ?
                                                    (
                                                        <tr>
                                                            <th className="text-start text-stone-300 pr-3">ID</th>
                                                            <td>#{randomCard.data?.id || '-'}</td>
                                                        </tr>
                                                    )
                                                    : null
                                                }
                                                {randomCard.data?.name ?
                                                    (
                                                        <tr>
                                                            <th className="text-start text-stone-300 pr-3">Name</th>
                                                            <td>{randomCard.data?.name || '-'}</td>
                                                        </tr>
                                                    )
                                                    : null
                                                }
                                                {randomCard.data?.typeline ?
                                                    (
                                                        <tr>
                                                            <th className="text-start text-stone-300 pr-3">TypeLine</th>
                                                            <td>[{randomCard.data?.typeline?.join(' / ')}]</td>
                                                        </tr>
                                                    )
                                                    : null
                                                }
                                                {randomCard.data?.type ?
                                                    (
                                                        <tr>
                                                            <th className="text-start text-stone-300 pr-3">Type</th>
                                                            <td>[{randomCard.data?.type}]</td>
                                                        </tr>
                                                    )
                                                    : null
                                                }
                                                {randomCard.data?.level ?
                                                    (
                                                        <tr>
                                                            <th className="text-start text-stone-300 pr-3">Level</th>
                                                            <td>{randomCard.data?.level || '-'}</td>
                                                        </tr>
                                                    )
                                                    : null
                                                }
                                                {randomCard.data?.scale ?
                                                    (
                                                        <tr>
                                                            <th className="text-start text-stone-300 pr-3">Scale</th>
                                                            <td>{randomCard.data?.scale || '-'}</td>
                                                        </tr>
                                                    )
                                                    : null
                                                }
                                                {randomCard.data?.linkval ?
                                                    (
                                                        <tr>
                                                            <th className="text-start text-stone-300 pr-3">Linkval</th>
                                                            <td>{randomCard.data?.linkval || '-'}</td>
                                                        </tr>
                                                    )
                                                    : null
                                                }
                                                {randomCard.data?.linkmarkers ?
                                                    (
                                                        <tr>
                                                            <th className="text-start text-stone-300 pr-3">LinkMarker</th>
                                                            <td>{randomCard.data?.linkmarkers?.join(' | ')}</td>
                                                        </tr>
                                                    )
                                                    : null
                                                }
                                                {randomCard.data?.race ?
                                                    (
                                                        <tr>
                                                            <th className="text-start text-stone-300 pr-3">Race</th>
                                                            <td>[{randomCard.data?.race}]</td>
                                                        </tr>
                                                    )
                                                    : null
                                                }
                                                {randomCard.data?.attribute ?
                                                    (
                                                        <tr>
                                                            <th className="text-start text-stone-300 pr-3">Attribute</th>
                                                            <td>{randomCard.data?.attribute || ''}</td>
                                                        </tr>
                                                    )
                                                    : null
                                                }
                                                {randomCard.data?.atk ?
                                                    (
                                                        <tr>
                                                            <th className="text-start text-stone-300 pr-3">ATK</th>
                                                            <td>{randomCard.data?.atk || '-'}</td>
                                                        </tr>
                                                    )
                                                    : null
                                                }
                                                {randomCard.data?.def ?
                                                    (
                                                        <tr>
                                                            <th className="text-start text-stone-300 pr-3">DEF</th>
                                                            <td>{randomCard.data?.def || '-'}</td>
                                                        </tr>
                                                    )
                                                    : null
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-span-1 flex flex-col gap-2">
                                        <div className="font-bold text-stone-50 text-lg">Description</div>
                                        <div>{randomCard.data?.desc}</div>
                                    </div>
                                    <div className="flex flex-col gap-2 font-semibold">
                                        <div className="font-bold text-stone-50 text-lg">Card Prices</div>
                                        <div className="flex items-center justify-between"><img src={'/images/amazon.png'}
                                            alt="" className="h-[15px]" /> {randomCard.data?.card_prices?.[0]?.amazon_price || '-'}$</div>
                                        <div className="flex items-center justify-between"><img src={'/images/cardmarket.png'}
                                            alt="" className="h-[15px]" /> {randomCard.data?.card_prices?.[0]?.cardmarket_price || '-'}$</div>
                                        <div className="flex items-center justify-between"><img src={'/images/coolstuffinc.png'}
                                            alt="" className="h-[15px]" /> {randomCard.data?.card_prices?.[0]?.coolstuffinc_price || '-'}$</div>
                                        <div className="flex items-center justify-between"><img src={'/images/ebay.png'}
                                            alt="" className="h-[15px]" /> {randomCard.data?.card_prices?.[0]?.ebay_price || '-'}$</div>
                                        <div className="flex items-center justify-between"><img src={'/images/TCGplayer.png'}
                                            alt="" className="h-[15px]" /> {randomCard.data?.card_prices?.[0]?.tcgplayer_price || '-'}$</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* All Art */}
                        <div>
                            <div className="font-bold text-stone-50 text-2xl md:text-3xl text-center px-10 py-[40px]">All art of "{randomCard.data?.name}"</div>
                            <div className="flex flex-wrap justify-center gap-x-2 gap-y-6 px-1 md:px-20 pb-[40px]">
                                {randomCard.data?.card_images?.map((cardImg) => {
                                    return <img key={cardImg.id} src={cardImg.image_url_small} alt="card image" className="w-[150px] md:w-[270px]" />
                                })}
                            </div>
                        </div>
                        {/* All Archetype */}
                        <div className="relative">
                            <div className="absolute m-bg-secondary-emphasis w-full h-full opacity-50"></div>
                            <div className="relative">
                                {
                                    archetype.data ?
                                        (
                                            <div>
                                                <div className="font-bold text-stone-50 text-2xl md:text-3xl text-center px-10 py-[40px]">All Archetype</div>
                                                <div className="pb-5 flex justify-center">
                                                    <div className="w-[80%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                                                        {archetype.data?.map((card) => {
                                                            return <CardShow key={card.id} card={card} />
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        : null
                                }
                            </div>
                        </div>
                    </div>
                )
            }


        </div >
    );
}

export default RandomDetailPage;
