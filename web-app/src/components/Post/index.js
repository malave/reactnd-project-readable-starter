import PropTypes from 'prop-types';
import React from 'react';
import {
    CATEGORY_PROPS,
    MODE_CARD,
    MODE_CREATE,
    MODE_EDIT,
    MODE_VIEW,
    POST_PROPS
} from '../../constants/propTypes';
import Card from './components/CardMode';
import Create from './components/CreateMode';
import Edit from './components/EditMode';
import View from './components/ViewMode';

class Post extends React.Component {
    renderMode(mode, post, categories) {
        switch (mode) {
            case MODE_CREATE:
                return <Create categories={categories} onCreate={this.props.onCreate} />;
            case MODE_EDIT:
                return <Edit categories={categories} post={post} onUpdate={this.props.onUpdate} />;
            case MODE_CARD:
                return <Card post={post} />;
            default:
                return <View post={post} />;
        }
    }

    render() {
        const { post, mode, categories } = this.props;
        return <div className={'post'}>{this.renderMode(mode, post, categories)}</div>;
    }
}

Post.propTypes = {
    post: PropTypes.shape(POST_PROPS),
    mode: PropTypes.oneOf([MODE_VIEW, MODE_CREATE, MODE_EDIT, MODE_CARD]),
    categories: PropTypes.arrayOf(PropTypes.shape(CATEGORY_PROPS)),
    onCreate: PropTypes.func,
    onUpdate: PropTypes.func,
};

Post.defaultProps = {
    mode: MODE_VIEW,
};

export default Post;
