import React from 'react'
import { render } from 'react-dom'
import Root from './js/Routes';
import store from "./js/store";

render(<Root store={store} />, document.getElementById('root'))