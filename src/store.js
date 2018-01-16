import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'

import profiles from './reducers/profiles'

const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f

const middleware = [
  ReduxThunk
]

const enhancer = compose(
  applyMiddleware(...middleware),
  devTools
)

const store = createStore(profiles, enhancer)

export default store