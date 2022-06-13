import React from 'react'
import {legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import { applyMiddleware,compose } from 'redux';
import reducer from './reducer';

const componseEnchancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,componseEnchancer(applyMiddleware(thunk)))

export default store;
