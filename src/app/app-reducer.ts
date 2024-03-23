export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type AppStateType = {
    status: RequestStatusType
    error: string | null
}

const initialState: AppStateType = {
    status: 'idle',
    error: null
}

type ActionsType = ReturnType<typeof appSetStatusAC> | ReturnType<typeof appSetError>

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
    switch (action.type) {

        case 'APP-SET-STATUS': {
            return {...state, status: action.payload.newStatus}
        }

        case 'APP-SET-ERROR': {
            return {...state, error: action.payload.errorMode}
        }
        
        default:
            return state
    }
}

export function appSetStatusAC(newStatus: RequestStatusType) {
    return {type: 'APP-SET-STATUS', payload: {newStatus}} as const
}

export function appSetError(errorMode: string | null) {
    return {type: 'APP-SET-ERROR', payload: {errorMode}} as const
}


