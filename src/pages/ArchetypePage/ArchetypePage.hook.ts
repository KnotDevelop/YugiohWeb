import { useForm } from 'react-hook-form'
import { AllArchetypeSevice, CardArchetypeSevice } from '@/service/index';
import { useEffect } from "react";
import { useCardListStore } from "@/store/CardDataStore";
import { useState } from "react";
import { CardList } from '@/interface/CardData';

type cardTypeList = {
    data: CardList[] | undefined;
    loading: boolean;
    error: null | unknown;
}

const useArchetypePage = () => {
    const { register, watch } = useForm()
    const { setAllArchetype, allArchetype } = useCardListStore()
    const [archetype, setArchetype] = useState<cardTypeList>({ data: undefined, loading: false, error: null });

    const archetypeValue = watch('archetypeKeyWord')

    const loadArchetype = async () => {
        const res = await AllArchetypeSevice();
        if (res.status === 200 && res.data) {
            const archetypeList: string[] = []
            for (const archetype of res.data) {
                archetypeList.push(archetype.archetype_name)
            }
            setAllArchetype(archetypeList)
            loadCardArchetypeData(archetypeList[0])
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
        loadArchetype()
    }, [])

    useEffect(() => {
        if (archetypeValue)
            loadCardArchetypeData(allArchetype[archetypeValue])
    }, [archetypeValue])

    return {
        archetypeKeyWord: register('archetypeKeyWord'),
        archetype: archetype,
        archetypeValue: archetypeValue
    }
}

export { useArchetypePage }