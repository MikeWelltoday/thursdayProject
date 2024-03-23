//========================================================================================
// api
export {decksAPI} from './api/decks-api.ts'

//========================================================================================
// reducers
export {decksReducer} from './reducers/decks-reducer.ts'
export {setDecksAC} from './reducers/decks-reducer.ts'
export {createDecksItem} from './reducers/decks-reducer.ts'

//========================================================================================
// selectors
export {decksSelectors} from './selectors/decks-selectors.ts'

//========================================================================================
// thunks
export {fetchDecksTC} from './thunks/decks-thunks.ts'
export {createDecksItemTC} from './thunks/decks-thunks.ts'

//========================================================================================
// store
export {store} from './store.ts'
export {useAppDispatch} from './store.ts'
export {useAppSelector} from './store.ts'

