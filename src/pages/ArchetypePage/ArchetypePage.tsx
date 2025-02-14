import NavBar from "@/components/NavBar"
import Dropdown from "@/components/Dropdown"
import { useCardListStore } from "@/store/CardDataStore";
import { useArchetypePage } from "./index";
import CardShow from "@/components/CardShow";
import Loading from "@/components/Loading";

const ArchetypePage = () => {
    const { allArchetype } = useCardListStore()
    const { archetypeKeyWord, archetype, archetypeValue } = useArchetypePage()

    return (
        <div className='w-full'>
            <div className='fixed w-full z-[99]'>
                <NavBar />
            </div>

            <div className="fixed w-full mt-15 z-[2]">
                <div className="relative">
                    <div className="absolute m-bg-info w-full h-full opacity-50"></div>
                    <div className="relative pt-7 pb-5">
                        <Dropdown heading="Archetype" itemList={allArchetype} formHook={archetypeKeyWord} />
                    </div>
                </div>
            </div>

            {/* All Archetype */}
            <div className="flex justify-center py-45">
                <div className="w-[80%] min-h-[100vh]">
                    {
                        archetype.loading
                            ? (
                                <Loading />
                            )
                            : (
                                <div>
                                    <div className="font-bold text-stone-50 text-2xl md:text-3xl 
                                                    text-center px-10 py-10">
                                        {allArchetype[archetypeValue]} Archetype
                                    </div>
                                    <div className="pb-10 flex justify-center">
                                        <div className="w-[80%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                                            {archetype.data?.map((card) => {
                                                return <CardShow key={card.id} card={card} />
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                    }

                </div>
            </div>
        </div>
    )
}

export default ArchetypePage