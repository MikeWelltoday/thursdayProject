import {Dispatch} from 'redux'
import {decksAPI, UpdateDeckParams} from './decks-api.ts'
import {addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC} from './decks-reducer.ts'
import {appSetStatusAC} from '../../app/app-reducer.ts'
import axios, {isAxiosError} from 'axios'
import {errorHandler} from '../../common/utils/handle-error.ts'


export const fetchDecksTC = () => async (dispatch: Dispatch) => {

    dispatch(appSetStatusAC('loading'))
    try {
        const res = await decksAPI.fetchDecks()
        dispatch(setDecksAC(res.data.items))
        dispatch(appSetStatusAC('succeeded'))
    } catch (e) {
        console.error(e)
        dispatch(appSetStatusAC('failed'))
    }

}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
    return decksAPI.addDeck(name).then((res) => {
        dispatch(addDeckAC(res.data))
    })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
    return decksAPI.deleteDeck(id).then((res) => {
        dispatch(deleteDeckAC(res.data.id))
    })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
    try {
        const res = await decksAPI.updateDeck(params)
        dispatch(updateDeckAC(res.data))

    } catch (error) {
        errorHandler(error, dispatch)
    }
}


