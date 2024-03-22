import {decksReducer, DecksStateType, setDecksAC} from '../reducers/decks-reducer.ts'

//========================================================================================

let startState: DecksStateType

beforeEach(() => {
    startState = {
        decks: [],
        searchParams: {
            name: ''
        }
    }
})

test('DECKS-SET', () => {

    const decksFromApi = [
        {
            author: {id: '920b29a5-af12-4d84-b7c0-e2b6dd114bac', name: 'Awkward'},
            cardsCount: 1,
            cover: null,
            created: '2024-03-22T09:21:02.235Z',
            id: 'clu2gbkm2029pvq2gazfmi4vk',
            isPrivate: false,
            name: 'Test',
            updated: '2024-03-22T09:21:02.235Z',
            userId: '920b29a5-af12-4d84-b7c0-e2b6dd114bac'
        },
        {
            author: {id: '920b29a5-af12-4d84-b7c0-e2b6dd114bac', name: 'Awkward'},
            cardsCount: 1,
            cover: null,
            created: '2024-03-22T09:21:02.235Z',
            id: 'clu2gbkm2029pvq2gazfmi4vk',
            isPrivate: false,
            name: 'Test',
            updated: '2024-03-22T09:21:02.235Z',
            userId: '920b29a5-af12-4d84-b7c0-e2b6dd114bac'
        }
    ]

    const endState = decksReducer(startState, setDecksAC((decksFromApi)))

    expect(endState.decks.length).toBe(2)
    expect(endState.decks[0]).toEqual(decksFromApi[0])
})












