import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import {
    HomePage,
    NotFound,
    PostPage
} from './containers';

// build the router
const router = (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/:category' component={HomePage} />
        <Route exact path='/:category/:id' component={PostPage} />
        <Route exact path='*' component={NotFound} />
    </Switch>
);

// export
export { router };