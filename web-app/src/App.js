import React, { Component } from 'react';
import {
    Breadcrumb,
    Col,
    Row,
} from 'react-materialize';
import { NavLink, } from 'react-router-dom';
import { router } from './router';

class App extends Component {
    render() {
        return (
            <div className={'container'}>
                <Row>
                    <Col s={12}>
                        <Breadcrumb>
                            <NavLink to="/">Readable</NavLink>
                            <NavLink to="/category">Category</NavLink>
                            <NavLink to="/category/123">Post</NavLink>
                        </Breadcrumb>
                    </Col>

                </Row>

                <Row>
                    <Col s={12}>
                        <div>{router}</div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
