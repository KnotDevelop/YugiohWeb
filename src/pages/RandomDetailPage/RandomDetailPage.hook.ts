import { RandomCardSevice, CardArchetypeSevice } from '@/service/index';
import { useState } from 'react';
import { CardList } from '@/interface/CardData';
import { useEffect, useRef } from 'react';

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

const useRandomDetailPage = () => {

    const [randomCard, setRandomCard] = useState<cardType>({ data: undefined, loading: false, error: null });
    const [archetype, setArchetype] = useState<cardTypeList>({ data: undefined, loading: false, error: null });

    const loadRandomCard = async () => {
        setRandomCard({ data: undefined, loading: true, error: null });
        try {
            const res = await RandomCardSevice();
            if (res.status === 200 && res.data) {
                const randCard = res.data.data[0]
                setRandomCard({ data: randCard, loading: false, error: null });

                if (randCard.archetype)
                    loadCardArchetypeData(randCard.archetype)

            } else {
                setRandomCard({ data: undefined, loading: false, error: 'No data found' });
            }
        } catch (error) {
            setRandomCard({ data: undefined, loading: false, error });
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

    const called = useRef(false);
    useEffect(() => {
        if (!called.current) {
            loadRandomCard();
            called.current = true;
        }
    }, []);

    return {
        randomCard,
        archetype
    }
}

export { useRandomDetailPage }