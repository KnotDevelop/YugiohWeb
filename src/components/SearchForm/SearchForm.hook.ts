import { useEffect, useRef } from "react"
import { useCardListStore } from "@/store/CardDataStore"
import { AllCardListService } from '@/service/index'
import { useForm } from 'react-hook-form'
import { type, race, frameType, sort } from '@/utils/CardFilterData';
import { CardList } from "@/interface/CardData";

const useSearchForm = () => {
    const { setFetchCardList, fetchCard, setPages } = useCardListStore()
    const { register, watch } = useForm()

    const typeKeyWord = watch('typeKeyWord')
    const raceKeyWord = watch('raceKeyWord')
    const frameTypeKeyWord = watch('frameTypeKeyWord')
    const sortKeyWord = watch('sortKeyWord')
    const searchKeyWord = watch('searchKeyWord')

    const loadAllCardData = async () => {
        setFetchCardList({ data: [], loading: true, error: null })
        const res = await AllCardListService()
        const data = res.data?.data

        if (res.status === 200 && data) {
            setFetchCardList({ data: data, loading: false, error: null })
            const dataFilted = cardFilter(data)
            sortPage(dataFilted)
        }
        else {
            setFetchCardList({ data: [], loading: false, error: res.error })
        }
    }

    const sortPage = (cards: CardList[]) => {
        const cardInPage = 150;
        const pages: { data: CardList[] }[] = [];
        let cardList: CardList[] = [];

        for (const element of cards) {
            cardList.push(element);
            if (cardList.length === cardInPage) {
                pages.push({ data: [...cardList] });
                cardList = [];
            }
        }

        if (cardList.length > 0) {
            pages.push({ data: [...cardList] });
        }
        setPages(pages);
    };

    const cardFilter = (data: CardList[]) => {
        if (!data) return [];

        const typeValue = Number(typeKeyWord) || 0;
        const raceValue = Number(raceKeyWord) || 0;
        const frameValue = Number(frameTypeKeyWord) || 0;
        const sortValue = Number(sortKeyWord) || 0;
        const searchValue = searchKeyWord?.toString() || '';

        const processedData = data.map(card => ({
            ...card,
            atk: card.atk ?? 0,
            def: card.def ?? 0,
            level: card.level ?? 0,
        }));

        const typeFilter = typeValue !== 0
            ? processedData.filter((_card) => _card.type === type[typeValue])
            : processedData;

        const raceFilter = raceValue !== 0
            ? typeFilter.filter((_card) => _card.race === race[raceValue])
            : typeFilter;

        const frameTypeFilter = frameValue !== 0
            ? raceFilter.filter((_card) => _card.frameType === frameType[frameValue])
            : raceFilter;

        const sortBy = (type: string) => {
            const sorted = [...frameTypeFilter]; // Prevent modifying original
            switch (type) {
                case "atk": return sorted.sort((a, b) => a.atk - b.atk);
                case "def": return sorted.sort((a, b) => a.def - b.def);
                case "name": return sorted.sort((a, b) => a.name.localeCompare(b.name));
                case "type": return sorted.sort((a, b) => a.type.localeCompare(b.type));
                case "level": return sorted.sort((a, b) => a.level - b.level);
                case "id": default: return sorted.sort((a, b) => a.id - b.id);
            }
        };

        const sortFilter = sortValue !== 0 ? sortBy(sort[sortValue]) : frameTypeFilter;
        const searchFilter = searchValue.length > 0
            ? sortFilter.filter((_card) => _card.name.toLowerCase().includes(searchValue.toLowerCase()))
            : sortFilter;


        return searchFilter;
    };

    const called = useRef(false)
    useEffect(() => {
        if (!called.current) {
            loadAllCardData()
            called.current = true
        }
    }, [])

    useEffect(() => {
        const data = fetchCard.data
        if (data) {
            const filteredData = cardFilter(data)
            sortPage(filteredData)
        }
    }, [typeKeyWord, raceKeyWord, frameTypeKeyWord, sortKeyWord, searchKeyWord])

    return {
        typeKeyWord: register('typeKeyWord'),
        raceKeyWord: register('raceKeyWord'),
        frameTypeKeyWord: register('frameTypeKeyWord'),
        sortKeyWord: register('sortKeyWord'),
        searchKeyWord: register('searchKeyWord')
    }
}

export { useSearchForm }