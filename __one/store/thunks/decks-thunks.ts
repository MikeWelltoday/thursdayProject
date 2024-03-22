import {AppDispatchType} from '../store.ts'
import {decksAPI} from '../api/decks-api.ts'
import {createDecksItem, setDecksAC} from '../reducers/decks-reducer.ts'

//========================================================================================

export function fetchDecksTC() {
    return (dispatch: AppDispatchType) => {
        decksAPI
            .fetchDecks()
            .then(res => dispatch(setDecksAC(res.data.items)))
            .catch(e => console.error(e))
    }
}

export function createDecksItemTC(name: string) {
    return async (dispatch: AppDispatchType) => {
        try {
            const res = await decksAPI.createDeckItem(name).then()
            dispatch(createDecksItem(res.data))
        } catch (error) {
            throw new Error('' + error)
        }
    }
}


