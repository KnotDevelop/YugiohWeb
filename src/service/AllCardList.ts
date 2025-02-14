import axios from "axios"
import { ICardListData } from "@/interface/CardResponse";
import { handleResponse, IResponse } from '@/utils/handleResponse';

interface IGetCardListResponse extends IResponse {
    data?: ICardListData
    status: number | undefined;
    statusText: string
}

interface IGetArchetypeResponse extends IResponse {
    data?: { archetype_name: string }[]
    status: number | undefined;
    statusText: string
}

interface IGetCardSetResponse extends IResponse {
    data?: {
        set_name: string;
        set_code: string
        num_of_cards: number
        tcg_date: string
        set_image: string
    }[];
    status: number | undefined;
    statusText: string
}

export const AllCardListService = async (): Promise<IGetCardListResponse> => {
    try {
        const res = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
        return handleResponse.success(res)

    } catch (error: any) {
        return handleResponse.error(error)
    }
}

export const CardDataSevice = async (name: string): Promise<IGetCardListResponse> => {
    try {
        const res = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`);
        return handleResponse.success(res)

    } catch (error: any) {
        return handleResponse.error(error)
    }
}

export const CardArchetypeSevice = async (archetype: string): Promise<IGetCardListResponse> => {
    try {
        const res = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${archetype}`);
        return handleResponse.success(res)

    } catch (error: any) {
        return handleResponse.error(error)
    }
}

export const AllArchetypeSevice = async (): Promise<IGetArchetypeResponse> => {
    try {
        const res = await axios.get(`https://db.ygoprodeck.com/api/v7/archetypes.php`);
        return handleResponse.success(res)

    } catch (error: any) {
        return handleResponse.error(error)
    }
}

export const RandomCardSevice = async (): Promise<IGetCardListResponse> => {
    try {
        const res = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=1&offset=0&sort=random&cachebust`);
        return handleResponse.success(res)

    } catch (error: any) {
        return handleResponse.error(error)
    }
}

export const AllCardSetSevice = async (): Promise<IGetCardSetResponse> => {
    try {
        const res = await axios.get(`https://db.ygoprodeck.com/api/v7/cardsets.php`);
        return handleResponse.success(res)

    } catch (error: any) {
        return handleResponse.error(error)
    }
}

