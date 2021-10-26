import React, { createContext } from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './router/AppRouter'
import { store } from './store/store'
createContext


export const app = () => {
    return (
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    )
}
