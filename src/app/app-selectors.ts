import {AppRootState} from './store.ts'
import {RequestStatusType} from './app-reducer.ts'


export const appStatusSelector = (state: AppRootState): RequestStatusType => state.app.status
export const appErrorSelector = (state: AppRootState): string | null => state.app.error