import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as  categoryActions from '../../actions/category';
import * as  commentActions from '../../actions/comment';
import * as  postActions from '../../actions/post';
import Post from '../../components/Post';
import {
    CATEGORY_PROPS,
    COMMENT_PROPS,
    POST_PROPS
} from '../../constants/propTypes';
import {
    MODE_CREATE,
    MODE_EDIT,
    MODE_VIEW
} from '../../constants/strings';

class PostPage extends React.Component {
    componentWillMount() {
        const { mode } = this.props;
        this.props.loadCategories();
        if (mode !== MODE_CREATE) {
            this.props.loadPost(this.props.match.params.id);
        }
        if (mode === MODE_VIEW) {
            this.props.loadComments(this.props.match.params.id);
        }
    }

    render() {
        const {
            mode,
            post,
            categories,
            comments,
            editPost,
            createPost,
            updatePost,
            updateComment,
            votePost,
            voteComment,
            deletePost,
            deleteComment,
            createComment,
        } = this.props;
        let postNode = <div />;
        if ((mode === MODE_VIEW) && !_.isEmpty(post)) {
            postNode = <Post
                comments={comments}
                post={post}
                mode={mode}
                onCreateComment={(comment) => {
                    comment.parentId = post.id;
                    return createComment(comment);
                }}
                onUpdateComment={updateComment}
                onVotePost={votePost}
                onVoteComment={voteComment}
                onDeleteComment={deleteComment}
                onDeletePost={deletePost}
                onEdit={editPost}
            />;
        }
        if ((mode === MODE_EDIT) && !_.isEmpty(post) && !_.isEmpty(categories)) {
            postNode = <Post
                onUpdatePost={updatePost}
                categories={categories}
                post={post}
                mode={mode}
                onEdit={editPost}
            />;
        }
        if ((mode === MODE_CREATE) && !_.isEmpty(categories)) {
            postNode = <Post
                onCreatePost={createPost}
                categories={categories}
                mode={mode}
            />;
        }
        return <div>{postNode}</div>;
    }
}

PostPage.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.string,
    post: PropTypes.shape(POST_PROPS),
    categories: PropTypes.arrayOf(PropTypes.shape(CATEGORY_PROPS)),
    comments: PropTypes.arrayOf(PropTypes.shape(COMMENT_PROPS)),
    mode: PropTypes.oneOf([MODE_VIEW, MODE_CREATE, MODE_EDIT]),
    loadPost: PropTypes.func,
    loadComments: PropTypes.func,
    createPost: PropTypes.func,
    updatePost: PropTypes.func,
    createComment: PropTypes.func,
    updateComment: PropTypes.func,
};
const mapStateToProps = (state) => ({
    loading: state.get('global').get('loading'),
    error: state.get('global').get('error'),
    categories: state.get('category').get('categories').toJS(),
    post: state.get('post').get('current') ? state.get('post').get('current').toJS() : null,
    comments: state.get('comment').get('comments') ? state.get('comment').get('comments').toJS() : null,
});

export function mapDispatchToProps(dispatch) {
    return {
        loadPost: (id) => {
            dispatch(postActions.loadPostById(id));
        },
        loadComments: (id) => {
            dispatch(commentActions.loadPostComments(id));
        },
        loadCategories: () => {
            dispatch(categoryActions.loadCategories());
        },
        createPost: (post) => {
            dispatch(postActions.createPost(post));
        },
        updatePost: (post) => {
            dispatch(postActions.updatePost(post));
        },
        createComment: (comment) => {
            dispatch(commentActions.createPostComment(comment));
        },
        updateComment: (comment) => {
            dispatch(commentActions.updateComment(comment));
        },
        votePost: (id, option) => {
            dispatch(postActions.votePost(id, option));
        },
        voteComment: (id, option) => {
            dispatch(commentActions.voteComment(id, option));
        },
        deletePost: (id) => {
            dispatch(postActions.deletePost(id));
        },
        deleteComment: (id) => {
            dispatch(commentActions.deleteComment(id));
        },
        editPost: (category, id) => {
            dispatch(push(`/${category}/${id}/edit`));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);