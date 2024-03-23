import {Dispatch} from 'redux'
import {isAxiosError} from 'axios'
import {appSetError} from '../../app/app-reducer.ts'

type ServerErrorType = {
    errorMessages: { field: string, message: string }[]
}

export function errorHandler(error: any, dispatch: Dispatch) {
    let errorMessage: string
    if (isAxiosError<ServerErrorType>(error)) {
        errorMessage = error.response ? error.response.data.errorMessages[0].message : error.message
    } else {
        errorMessage = (error as Error).message
    }
    dispatch(appSetError(errorMessage))
}