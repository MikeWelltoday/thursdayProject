import axios from 'axios'

//========================================================================================

const instance = axios.create({
    baseURL: 'https://api.flashcards.andrii.es',
    headers: {
        'x-auth-skip': true
    }
})

//========================================================================================

type AuthorType = {
    id: string;
    name: string;
}

export type DeckItemType = {
    author: AuthorType;
    id: string;
    userId: string;
    name: string;
    isPrivate: boolean;
    cover: string | null;
    created: string;
    updated: string;
    cardsCount: number;
}

type PaginationType = {
    currentPage: number;
    itemsPerPage: number;
    totalPages: number;
    totalItems: number;
}

export type decksGetResponseApiType = {
    items: DeckItemType[];
    pagination: PaginationType;
}

//========================================================================================

export const decksAPI = {

    fetchDecks() {
        return instance.get<decksGetResponseApiType>('/v2/decks')
    },

    createDeckItem(name:string) {
        return instance.post<DeckItemType>('/v1/decks', {name})
    }

}
