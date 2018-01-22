import React from 'react';
import {
    Button,
    Icon
} from 'react-materialize';

export default class PostPage extends React.Component {
    // render
    render() {
        return (
            <div>
                Home {JSON.stringify(this.props.match.params)}
                <Button waves='light'>
                    <Icon>thumb_up</Icon>
                    <Icon medium>insert_chart</Icon>
                </Button>
            </div>
        );
    }
}