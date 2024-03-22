import {AppDispatchType} from '../store.ts'
import {decksAPI} from '../api/decks-api.ts'
import {setDecksAC} from '../reducers/decks-reducer.ts'

//========================================================================================

export function fetchDecksTC() {
    return (dispatch: AppDispatchType) => {
        decksAPI
            .fetchDecks()
            .then(res => dispatch(setDecksAC(res.data.items)))
            .catch(e => console.error(e))
    }
}


