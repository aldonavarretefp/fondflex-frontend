import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'

import { store } from './store';

const FondFlexApp = () => {
  return (

      <Provider
        store={store}
      >
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </Provider>
  )
}

export default FondFlexApp
