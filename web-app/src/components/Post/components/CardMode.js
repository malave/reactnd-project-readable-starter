import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {
    Badge,
    Card,
    CardTitle,
    Icon,
} from 'react-materialize';
import { NavLink, } from 'react-router-dom';
import { POST_PROPS } from '../../../constants/propTypes';

class CardMode extends React.Component {
    componentWillUpdate(nextProps, nextState, nextContext) {

    }

    render() {
        const { post } = this.props;
        return (
            <Card
                className='small hoverable'
                header={<CardTitle image={`https://picsum.photos/341/180/?random&counter=${_.random(0, 100)}`}>{post.title}</CardTitle>}
                actions={[
                    <div key={_.random(0, 100)}>
                        <NavLink to={`/${post.category}/${post.id}`}>Read</NavLink>
                        <Badge>{post.commentCount} <Icon tiny>chat</Icon></Badge>
                        <Badge>{post.voteScore} <Icon tiny>thumb_up</Icon></Badge>
                    </div>
                ]}
            ><h6 className={'center-align grey-text text-lighten-1'}>&mdash; {post.category} &mdash;</h6></Card>
        );
    }
}

CardMode.propTypes = {
    post: PropTypes.shape(POST_PROPS).isRequired
};

export default CardMode;