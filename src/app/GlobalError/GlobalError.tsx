import {useEffect} from 'react'
import {toast, ToastContainer} from 'react-toastify'
import {useSelector} from 'react-redux'
import {appErrorSelector} from '../app-selectors.ts'
import {useAppDispatch} from '../store.ts'
import {appSetError} from '../app-reducer.ts'

export const GlobalError = () => {

    const errorMessage = useSelector(appErrorSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(appSetError(null))
        }

    }, [errorMessage])

    return <ToastContainer theme="dark" autoClose={3000}/>
}




