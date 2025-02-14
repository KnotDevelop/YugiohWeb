import { useParams } from "react-router-dom";
import { CardDataSevice } from '@/service/index';
import { useEffect, useState } from "react";
import { CardList } from "@/interface/CardData";
import { CardArchetypeSevice } from "@/service/index";
import CardShow from "@/components/CardShow";
import NavBar from "@/components/NavBar";

type cardType = {
    data: CardList | undefined;
    loading: boolean;
    error: null | unknown;
}

type cardTypeList = {
    data: CardList[] | undefined;
    loading: boolean;
    error: null | unknown;
}

const DetailPage = () => {
    const { cardName } = useParams();
    const [card, setCard] = useState<cardType>({ data: undefined, loading: false, error: null });
    const [archetype, setArchetype] = useState<cardTypeList>({ data: undefined, loading: false, error: null });

    const loadCardData = async () => {
        setCard({ data: undefined, loading: true, error: null });
        const name = cardName?.toString() ?? '';
        try {
            const res = await CardDataSevice(name);
            if (res.status === 200 && res.data?.data) {
                setCard({ data: res.data.data[0], loading: false, error: null });

                if (res.data.data[0].archetype)
                    loadCardArchetypeData(res.data.data[0].archetype)

            } else {
                setCard({ data: undefined, loading: false, error: 'No data found' });
            }
        } catch (error) {
            setCard({ data: undefined, loading: false, error });
        }
    }

    const loadCardArchetypeData = async (archetype: string) => {
        setArchetype({ data: undefined, loading: true, error: null });
        try {
            const res = await CardArchetypeSevice(archetype);

            if (res.status === 200 && res.data?.data) {
                setArchetype({ data: res.data.data, loading: false, error: null });
            } else {
                setArchetype({ data: undefined, loading: false, error: 'No data found' });
            }
        } catch (error) {
            setArchetype({ data: undefined, loading: false, error });
        }
    }

    useEffect(() => {
        loadCardData();
    }, [cardName]);

    return (
        <div className="min-h-[100vh]">
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
                    <div className="font-bold text-stone-50 text-2xl md:text-3xl text-center px-10">{card.data?.name}</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[800px] p-10
                rounded-[10px] m-2">
                        <div className="flex justify-center md:justify-start">
                            <img src={card.data?.card_images?.[0]?.image_url_small ??
                                card.data?.card_images?.[0]?.image_url_cropped}
                                alt="card image" className="w-[250px] h-auto shadow-lg 
                        shadow-gray-300/50" />
                        </div>
                        <div>
                            <div className="font-bold text-stone-50 text-lg">Card Info</div>
                            <table className="table-auto border-separate border-spacing-y-2">
                                <tbody>
                                    {card.data?.id ?
                                        (
                                            <tr>
                                                <th className="text-start text-stone-300 pr-3">ID</th>
                                                <td>#{card.data?.id || '-'}</td>
                                            </tr>
                                        )
                                        : null
                                    }
                                    {card.data?.name ?
                                        (
                                            <tr>
                                                <th className="text-start text-stone-300 pr-3">Name</th>
                                                <td>{card.data?.name || '-'}</td>
                                            </tr>
                                        )
                                        : null
                                    }
                                    {card.data?.typeline ?
                                        (
                                            <tr>
                                                <th className="text-start text-stone-300 pr-3">TypeLine</th>
                                                <td>[{card.data?.typeline?.join(' / ')}]</td>
                                            </tr>
                                        )
                                        : null
                                    }
                                    {card.data?.type ?
                                        (
                                            <tr>
                                                <th className="text-start text-stone-300 pr-3">Type</th>
                                                <td>[{card.data?.type}]</td>
                                            </tr>
                                        )
                                        : null
                                    }
                                    {card.data?.level ?
                                        (
                                            <tr>
                                                <th className="text-start text-stone-300 pr-3">Level</th>
                                                <td>{card.data?.level || '-'}</td>
                                            </tr>
                                        )
                                        : null
                                    }
                                    {card.data?.scale ?
                                        (
                                            <tr>
                                                <th className="text-start text-stone-300 pr-3">Scale</th>
                                                <td>{card.data?.scale || '-'}</td>
                                            </tr>
                                        )
                                        : null
                                    }
                                    {card.data?.linkval ?
                                        (
                                            <tr>
                                                <th className="text-start text-stone-300 pr-3">Linkval</th>
                                                <td>{card.data?.linkval || '-'}</td>
                                            </tr>
                                        )
                                        : null
                                    }
                                    {card.data?.linkmarkers ?
                                        (
                                            <tr>
                                                <th className="text-start text-stone-300 pr-3">LinkMarker</th>
                                                <td>{card.data?.linkmarkers?.join(' | ')}</td>
                                            </tr>
                                        )
                                        : null
                                    }
                                    {card.data?.race ?
                                        (
                                            <tr>
                                                <th className="text-start text-stone-300 pr-3">Race</th>
                                                <td>[{card.data?.race}]</td>
                                            </tr>
                                        )
                                        : null
                                    }
                                    {card.data?.attribute ?
                                        (
                                            <tr>
                                                <th className="text-start text-stone-300 pr-3">Attribute</th>
                                                <td>{card.data?.attribute || ''}</td>
                                            </tr>
                                        )
                                        : null
                                    }
                                    {card.data?.atk ?
                                        (
                                            <tr>
                                                <th className="text-start text-stone-300 pr-3">ATK</th>
                                                <td>
                                                    {card.data?.atk ?
                                                        (card.data?.atk >= 0 ? card.data?.atk : '?')
                                                        :
                                                        ('-')
                                                    }
                                                </td>
                                            </tr>
                                        )
                                        : null
                                    }
                                    {card.data?.def ?
                                        (
                                            <tr>
                                                <th className="text-start text-stone-300 pr-3">DEF</th>
                                                <td>
                                                    {card.data?.def ?
                                                        (card.data?.def >= 0 ? card.data?.def : '?')
                                                        :
                                                        ('-')
                                                    }
                                                </td>
                                            </tr>
                                        )
                                        : null
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="col-span-1 flex flex-col gap-2">
                            <div className="font-bold text-stone-50 text-lg">Description</div>
                            <div>{card.data?.desc}</div>
                        </div>
                        <div className="flex flex-col gap-2 font-semibold">
                            <div className="font-bold text-stone-50 text-lg">Card Prices</div>
                            <div className="flex items-center justify-between"><img src={'/images/amazon.png'}
                                alt="" className="h-[15px]" /> {card.data?.card_prices?.[0]?.amazon_price || '-'}$</div>
                            <div className="flex items-center justify-between"><img src={'/images/cardmarket.png'}
                                alt="" className="h-[15px]" /> {card.data?.card_prices?.[0]?.cardmarket_price || '-'}$</div>
                            <div className="flex items-center justify-between"><img src={'/images/coolstuffinc.png'}
                                alt="" className="h-[15px]" /> {card.data?.card_prices?.[0]?.coolstuffinc_price || '-'}$</div>
                            <div className="flex items-center justify-between"><img src={'/images/ebay.png'}
                                alt="" className="h-[15px]" /> {card.data?.card_prices?.[0]?.ebay_price || '-'}$</div>
                            <div className="flex items-center justify-between"><img src={'/images/TCGplayer.png'}
                                alt="" className="h-[15px]" /> {card.data?.card_prices?.[0]?.tcgplayer_price || '-'}$</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* All Art */}
            <div>
                <div className="font-bold text-stone-50 text-2xl md:text-3xl text-center px-10 py-[40px]">All art of "{card.data?.name}"</div>
                <div className="flex flex-wrap justify-center gap-x-2 gap-y-6 px-1 md:px-20 pb-[40px]">
                    {card.data?.card_images?.map((cardImg) => {
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
        </div >
    );
}

export default DetailPage;
