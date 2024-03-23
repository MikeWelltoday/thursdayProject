import s from './DecksList.module.css'
import {DeckItem} from './DeckItem/DeckItem.tsx'
import {useFetchDecks} from './useFetchDecks.ts'
import Skeleton from 'react-loading-skeleton'

export const DecksList = () => {
    const {decks, isLoading} = useFetchDecks()

    return (
        <ul className={s.list}>
            {isLoading ? <Skeleton height={100} count={10} style={{marginBottom: '10px'}}/>
                : decks.map((deck) => (<DeckItem key={deck.id} deck={deck}/>))}
        </ul>
    )
}
