import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './routes/Router/Router.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import { Provider } from 'react-redux'
import store from './store.js'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AuthProvider>    
        <Router />
    </AuthProvider>
  </Provider>,
)
