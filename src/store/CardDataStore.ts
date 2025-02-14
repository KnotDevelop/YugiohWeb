import { create } from 'zustand'
import { CardList } from '@/interface/CardData';

const initStore = {
    fetchCard: {
        data: [],
        loading: false,
        error: null
    },
    pages: [],
    allArchetype: [],
}

type CardType = {
    data: CardList[] | undefined;
    loading: boolean;
    error: null | any;
}

type Pages = {
    data: CardList[]
}

type UsePokemonListStoreType = {
    fetchCard: CardType;
    pages: Pages[];
    allArchetype: string[];
    setFetchCardList: (value: CardType) => void;
    clearCard: () => void;
    setPages: (value: Pages[]) => void;
    setAllArchetype: (value: string[]) => void;
}

export const useCardListStore = create<UsePokemonListStoreType>((set) => ({
    ...initStore,
    setFetchCardList: (value: CardType) => set({ fetchCard: value }),
    clearCard: () => set({ ...initStore }),
    setPages: (value: Pages[]) => set({ pages: value }),
    setAllArchetype: (value: string[]) => set({ allArchetype: value }),
}))