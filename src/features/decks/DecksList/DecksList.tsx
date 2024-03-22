import s from './DecksList.module.css'
import {FC, useEffect} from 'react'
import {decksAPI, decksSelectors, fetchDecksTC, setDecksAC, useAppDispatch, useAppSelector} from '../../../store'
import {DeckItem} from './DeckItem/DeckItem.tsx'

//========================================================================================

type DecksListPropsType = {}

//========================================================================================

export const DecksList: FC<DecksListPropsType> = (props) => {

    const dispatch = useAppDispatch()
    const decks = useAppSelector(decksSelectors)

    useEffect(() => {
        dispatch(fetchDecksTC())
    }, [])

    return (
        <ul className={s.list}>
            {decks.map(item => <DeckItem key={item.id} deck={item}/>)}
        </ul>
    )
}
