//========================================================================================

import {DeckItemType} from '../api/decks-api.ts'

//========================================================================================

type SearchParamsType = {
    name: string
}

export type DecksStateType = {
    decks: DeckItemType[]
    searchParams: SearchParamsType
}

//========================================================================================

export type DecksReducerType = ReturnType<typeof setDecksAC> | ReturnType<typeof createDecksItem>

//========================================================================================

const initialState: DecksStateType = {
    decks: [],
    searchParams: {
        name: ''
    }
}

export function decksReducer(state: DecksStateType = initialState, action: DecksReducerType): DecksStateType {
    switch (action.type) {

        case 'DECKS-SET': {
            return {...state, decks: [...action.payload.decksFromAPI]}
        }

        case 'DECKS-CREATE-ITEM': {
            return {...state, decks: [{...action.payload.newDeckFromAPI},...state.decks]}
        }

        default:
            return state
    }
}

//========================================================================================

export function setDecksAC(decksFromAPI: DeckItemType[]) {
    return {type: 'DECKS-SET', payload: {decksFromAPI}} as const
}

export function createDecksItem(newDeckFromAPI: DeckItemType) {
    return {type: 'DECKS-CREATE-ITEM', payload: {newDeckFromAPI}} as const
}
