import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {
    CardPanel,
    Col,
    Row,
} from 'react-materialize';
import { NavLink, } from 'react-router-dom';
import { MODE_CARD } from '../../constants/strings';
import Post from '../Post';

class PostList extends React.Component {

    renderCol(posts) {
        return posts.map((post) => <Col s={4} key={post.id}><Post post={post} mode={MODE_CARD} /></Col>);
    }

    renderRow(groups) {
        return (
            groups.map(posts => <Row key={_.uniqueId('PostList-row-')}>{posts}</Row>)
        );
    }

    renderAddCard() {
        return (
            <Col key={'omg-this-is-so-unique'} s={4}>
                <div className=" card-add">
                    <CardPanel className="hoverable center-align">
                        <NavLink className={'btn-floating btn-large waves-effect waves-light red '} to={'/create'}><i className="material-icons">add</i></NavLink>
                    </CardPanel>
                </div>
            </Col>
        );
    }

    render() {
        const { posts } = this.props;
        const cols = this.renderCol(posts);
        cols.push(this.renderAddCard());
        const groups = _.chunk(cols, 3);
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
