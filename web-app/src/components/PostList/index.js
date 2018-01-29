import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {
    Col,
    Row
} from 'react-materialize';
import { MODE_CARD } from '../../constants/propTypes';
import Post from '../Post';

class PostList extends React.Component {

    renderCol(posts) {
        return posts.map((post) => <Col s={4} key={post.id}><Post post={post} mode={MODE_CARD} /></Col>);
    }

    renderRow(groups) {
        return (
            groups.map(posts => <Row key={_.uniqueId('PostList-row-')}>{this.renderCol(posts)}</Row>)
        );
    }

    render() {
        const { posts } = this.props;
        const groups = _.chunk(posts, 3);
        const rows = this.renderRow(groups);
        return (
            <div>{rows}</div>
        );
    }
}

PostList.propTypes = {
    posts: PropTypes.array,
};

PostList.defaultProps = {
    posts: []
};
export default PostList;
