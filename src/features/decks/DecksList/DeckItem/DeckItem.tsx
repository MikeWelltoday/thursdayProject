import s from './DeckItem.module.css'
import {useAppDispatch} from '../../../../app/store.ts'
import {deleteDeckTC, updateDeckTC} from '../../decks-thunks.ts'
import {Deck} from '../../decks-api.ts'
import {useState} from 'react'

type DeckProps = {
    deck: Deck
}

const TEST_ACC_NAME = 'User'

export const DeckItem = ({deck}: DeckProps) => {
    const isTestingDeck = deck.author.name === TEST_ACC_NAME
    const dispatch = useAppDispatch()

    const [isDisabled, setIsDisabled] = useState(false)

    const handleDeleteButtonClick = () => {
        setIsDisabled(true)
        dispatch(deleteDeckTC(deck.id))
            .finally(() => setIsDisabled(false))

    }

    const handleEditButtonClick = () => {
        setIsDisabled(true)
        dispatch(updateDeckTC({id: deck.id, name: `${deck.name} updated`}))
            .finally(() => setIsDisabled(false))
    }

    return (
        <li className={s.item}>
            <h3 className={s.title}>
                {deck.name}
                {isTestingDeck && '✨'}
            </h3>
            <p className={s.characteristic}>
                <b>Author:</b> {deck.author.name}
            </p>
            <p className={s.characteristic}>
                <b>Created:</b> {new Date(deck.created).toLocaleString('ru-Ru')}
            </p>
            <p className={s.characteristic}>
                <b>Updated:</b> {new Date(deck.updated).toLocaleString('ru-Ru')}
            </p>

            {isTestingDeck && (
                <div className={s.buttonBox}>
                    <button onClick={handleEditButtonClick} disabled={isDisabled}>update</button>
                    <button onClick={handleDeleteButtonClick} disabled={isDisabled}>delete</button>
                </div>
            )}
        </li>
    )
}
