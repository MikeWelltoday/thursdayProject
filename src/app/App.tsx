import './App.css'
import {Decks} from '../features/decks/Decks.tsx'
import {GlobalError} from './GlobalError/GlobalError.tsx'
import {LinearLoader} from '../common/components/Loader/LinearLoader.tsx'
import {useSelector} from 'react-redux'
import {appStatusSelector} from './app-selectors.ts'

export const App = () => {

    const isLoading = useSelector(appStatusSelector) === 'loading'

    return (
        <div>
            {isLoading && <LinearLoader/>}
            <Decks/>
            <GlobalError/>
            <footer>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem, blanditiis delectus deleniti
                doloremque earum error est id, illum itaque maiores molestias nemo perspiciatis praesentium quasi quia
                quo reiciendis repellat tempora totam ullam vel veniam vero vitae voluptatem? Consectetur dolorem
                dolorum earum eos esse ex facilis molestiae molestias nemo perspiciatis?
            </footer>
        </div>
    )
}
