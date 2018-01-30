import PropTypes from 'prop-types';
import React from 'react';
import {
    CATEGORY_PROPS,
    COMMENT_PROPS,
    MODE_CARD,
    MODE_CREATE,
    MODE_EDIT,
    MODE_VIEW,
    POST_PROPS
} from '../../constants/propTypes';
import Card from './components/CardMode';
import Create from './components/CreateMode';
import View from './components/ViewMode';

class Post extends React.Component {
    renderMode(mode, post, categories, comments) {
        switch (mode) {
            case MODE_CREATE:
                return <Create categories={categories} onSubmit={this.props.onCreatePost} />;
            case MODE_EDIT:
                return <Create categories={categories} post={post} onSubmit={this.props.onUpdatePost} />;
            case MODE_CARD:
                return <Card post={post} />;
            default:
                return <View comments={comments} post={post} onCreateComment={this.props.onCreateComment} onUpdateComment={this.props.onUpdateComment} />;
        }
    }

    render() {
        const { post, mode, categories, comments } = this.props;
        return <div className={'post'}>{this.renderMode(mode, post, categories, comments)}</div>;
    }
}

Post.propTypes = {
    post: PropTypes.shape(POST_PROPS),
    mode: PropTypes.oneOf([MODE_VIEW, MODE_CREATE, MODE_EDIT, MODE_CARD]),
    categories: PropTypes.arrayOf(PropTypes.shape(CATEGORY_PROPS)),
    comments: PropTypes.arrayOf(PropTypes.shape(COMMENT_PROPS)),
    onCreatePost: PropTypes.func,
    onUpdatePost: PropTypes.func,
    onCreateComment: PropTypes.func,
    onUpdateComment: PropTypes.func,
};

Post.defaultProps = {
    mode: MODE_VIEW,
};

export default Post;
