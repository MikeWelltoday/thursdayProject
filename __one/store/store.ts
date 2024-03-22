import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {decksReducer, DecksReducerType} from './reducers/decks-reducer.ts'

//========================================================================================

const rootReducer = combineReducers({
    decksReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>
type AllActionsType = DecksReducerType
export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AllActionsType>

export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
