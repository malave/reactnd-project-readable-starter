import PropTypes from 'prop-types';
import React from 'react';
import {
    CATEGORY_PROPS,
    COMMENT_PROPS,
    POST_PROPS
} from '../../constants/propTypes';
import {
    MODE_CARD,
    MODE_CREATE,
    MODE_EDIT,
    MODE_VIEW
} from '../../constants/strings';
import Card from './components/CardMode';
import Create from './components/CreateMode';
import View from './components/ViewMode';

class Post extends React.Component {
    renderMode() {
        const {
            post,
            mode,
            categories,
            comments,
            onUpdatePost,
            onCreatePost,
            onCreateComment,
            onUpdateComment,
            onVotePost,
            onVoteComment,
            onDeleteComment,
            onDeletePost,
            onEdit,
        } = this.props;

        switch (mode) {
            case MODE_CREATE:
                return <Create
                    categories={categories}
                    onSubmit={onCreatePost}
                />;
            case MODE_EDIT:
                return <Create
                    categories={categories}
                    post={post}
                    onSubmit={onUpdatePost}
                    onVotePost={onVotePost}
                    onDeletePost={onDeletePost}

                />;
            case MODE_CARD:
                return <Card
                    post={post}
                    onVotePost={onVotePost}
                    onDeletePost={onDeletePost}
                    onEdit={onEdit}
                />;
            default:
                return <View
                    comments={comments}
                    post={post}
                    onCreateComment={onCreateComment}
                    onUpdateComment={onUpdateComment}
                    onVotePost={onVotePost}
                    onVoteComment={onVoteComment}
                    onDeleteComment={onDeleteComment}
                    onDeletePost={onDeletePost}
                    onEdit={onEdit}
                />;
        }
    }

    render() {
        return <div className={'post'}>{this.renderMode()}</div>;
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
    onVotePost: PropTypes.func,
    onVoteComment: PropTypes.func,
    onDeleteComment: PropTypes.func,
    onDeletePost: PropTypes.func,
    onEdit: PropTypes.func,
};

Post.defaultProps = {
    mode: MODE_VIEW,
};

export default Post;
