import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './app/App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
