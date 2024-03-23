import {appReducer, AppStateType, appSetStatusAC, appSetError} from './app-reducer.ts'


let startState: AppStateType

beforeEach(() => {
    startState = {
        status: 'idle',
        error: null
    }
})

test('APP-SET-STATUS', () => {

    const newStatus = 'loading'

    const endState = appReducer(startState, appSetStatusAC(newStatus))

    expect(endState.status).toBe(newStatus)
})

test('APP-SET-ERROR', () => {
    const newErrorMode = 'ERROR'

    const endState = appReducer(startState, appSetError(newErrorMode))

    expect(endState.error).toBe(newErrorMode)
})