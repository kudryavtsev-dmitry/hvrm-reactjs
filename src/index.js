import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { store } from './store'
import { AppModule } from 'modules'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppModule />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
serviceWorker.unregister()
