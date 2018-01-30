import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as  categoryActions from '../../actions/category';
import * as  commentActions from '../../actions/comment';
import * as  postActions from '../../actions/post';
import Post from '../../components/Post';
import {
    CATEGORY_PROPS,
    COMMENT_PROPS,
    MODE_CREATE,
    MODE_EDIT,
    MODE_VIEW,
    POST_PROPS
} from '../../constants/propTypes';

class PostPage extends React.Component {
    constructor() {
        super();
        this.onCreatePost = this.onCreatePost.bind(this);
        this.onUpdatePost = this.onUpdatePost.bind(this);
        this.onCreateComment = this.onCreateComment.bind(this);
        this.onUpdateComment = this.onUpdateComment.bind(this);
    }

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

    onCreatePost(post) {
        this.props.createPost(post);
    }

    onUpdatePost(post) {
        this.props.updatePost(post);
    }

    onCreateComment(comment) {
        comment.parentId = this.props.post.id;
        this.props.createComment(comment);
    }

    onUpdateComment(comment) {
        this.props.updateComment(comment);
    }

    render() {
        const { mode, post, categories, comments } = this.props;
        if ((mode === MODE_VIEW) && !_.isEmpty(post)) return <Post comments={comments} post={post} mode={mode} onCreateComment={this.onCreateComment} onUpdateComment={this.onUpdateComment} />;
        if ((mode === MODE_EDIT) && !_.isEmpty(post) && !_.isEmpty(categories)) return <Post onUpdatePost={this.onUpdatePost} categories={categories} post={post} mode={mode} />;
        if ((mode === MODE_CREATE) && !_.isEmpty(categories)) return <Post onCreatePost={this.onCreatePost} categories={categories} mode={mode} />;
        return '';
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
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);