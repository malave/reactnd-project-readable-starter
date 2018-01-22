import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas/';
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
    // create the saga middleware
    // List of middlewares
    const middlewares = [
        sagaMiddleware,
        routerMiddleware(history),
    ];

    //Creates function to be executed by composer
    const enhancers = [
        applyMiddleware(...middlewares),
    ];

    // Enable devtools if available
    // https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                shouldHotReload: false,
            })
            : compose;

    const store = createStore(
        reducers(),
        fromJS(initialState),
        composeEnhancers(...enhancers)
    );

    sagas(sagaMiddleware.run);

    return store;
}
