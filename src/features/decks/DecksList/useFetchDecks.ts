import {useAppDispatch, useAppSelector} from '../../../app/store.ts'
import {selectDecks} from '../decks-selectors.ts'
import {useEffect, useState} from 'react'
import {fetchDecksTC} from '../decks-thunks.ts'

export const useFetchDecks = () => {
    const dispatch = useAppDispatch()
    const decks = useAppSelector(selectDecks)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        dispatch(fetchDecksTC()).finally(() => setIsLoading(false))
    }, [])

    return {
        decks,
        isLoading
    }
}
