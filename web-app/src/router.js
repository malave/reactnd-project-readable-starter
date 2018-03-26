import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import {
    MODE_CREATE,
    MODE_EDIT,
    MODE_VIEW
} from './constants/strings';

import {
    HomePage,
    NotFound,
    PostPage
} from './containers';
// build the router
const router = (
    <Switch>
        <Route exact path='/404' component={NotFound} />
        <Route exact path='/' component={HomePage} />
        <Route
            exact path='/create' render={(props) => (
            <PostPage {...props} mode={MODE_CREATE} />
        )}
        />
        <Route exact path='/:category' component={HomePage} />
        <Route
            exact path='/:category/:id' render={(props) => (
            <PostPage {...props} mode={MODE_VIEW} />
        )}
        />
        <Route
            exact path='/:category/:id/edit' render={(props) => (
            <PostPage {...props} mode={MODE_EDIT} />
        )}
        />
    </Switch>
);

// export
export { router };