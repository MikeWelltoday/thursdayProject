import s from './DecksList.module.css'
import {FC} from 'react'
import {DeckItem} from './DeckItem/DeckItem.tsx'
import {useFetchDecks} from '../../../hooks/useFetchDecks.ts'

//========================================================================================

type DecksListPropsType = {}

//========================================================================================

export const DecksList: FC<DecksListPropsType> = (props) => {

    const {decks} = useFetchDecks()

    return (
        <ul className={s.list}>
            {decks.map(item => <DeckItem key={item.id} deck={item}/>)}
        </ul>
    )
}
