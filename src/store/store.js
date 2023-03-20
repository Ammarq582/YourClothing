import {legacy_createStore as createStore, compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist'
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';


const middlewares = [
    process.env.NODE_ENV !== 'production'
    &&
    logger, thunk].filter(Boolean);

const composeEnhancer = (
    process.env.NODE_ENV !== 'production'
    && window
    && window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__
    )
    ||
    compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);