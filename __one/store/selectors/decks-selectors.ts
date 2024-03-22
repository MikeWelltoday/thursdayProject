import {AppRootStateType} from '../store.ts'
import {DecksStateType} from '../reducers/decks-reducer.ts'
import {DeckItemType} from '../api/decks-api.ts'

//========================================================================================

export const decksSelectors = (state: AppRootStateType): DeckItemType[] => state.decksReducer.decks