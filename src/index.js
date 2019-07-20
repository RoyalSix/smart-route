import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import todoApp from './js/reducers'
import Root from './js/Routes';

const store = createStore(todoApp)

render(<Root store={store} />, document.getElementById('root'))