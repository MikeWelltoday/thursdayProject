import {decksSelectors, fetchDecksTC, useAppDispatch, useAppSelector} from '../store'
import {useEffect} from 'react'


export function useFetchDecks() {
    const dispatch = useAppDispatch()
    const decks = useAppSelector(decksSelectors)

    useEffect(() => {
        dispatch(fetchDecksTC())
    }, [])

    return {
        decks
    }
}