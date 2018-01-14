import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';
import reducers from './reducers';

export default function configureStore(initialState = {}, history) {
    const middlewares = [
        routerMiddleware(history),
    ];

    const enhancers = [
        applyMiddleware(...middlewares),
    ];
    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                shouldHotReload: false,
            })
            : compose;

    return createStore(
        reducers(),
        fromJS(initialState),
        composeEnhancers(...enhancers)
    );
}
