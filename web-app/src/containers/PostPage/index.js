import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { loadCategories } from '../../actions/category';
import {
    createPost,
    loadPostById,
    updatePost
} from '../../actions/post';
import Post from '../../components/Post';
import {
    CATEGORY_PROPS,
    MODE_CREATE,
    MODE_EDIT,
    MODE_VIEW,
    POST_PROPS,
} from '../../constants/propTypes';

class PostPage extends React.Component {
    constructor() {
        super();
        this.onCreate = this.onCreate.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    componentWillMount() {
        const { mode } = this.props;
        this.props.loadCategories();
        if (mode !== MODE_CREATE) {
            this.props.loadPost(this.props.match.params.id);
            // TODO: this.props.loadComments(this.props.match.params.id);
        }
    }

    onCreate(post) {
        this.props.createPost(post);
    }

    onUpdate(post) {
        this.props.updatePost(post);
    }

    render() {
        const { mode, post, categories } = this.props;
        if ((mode === MODE_VIEW) && !_.isEmpty(post)) return <Post post={post} mode={mode} />;
        if ((mode === MODE_EDIT) && !_.isEmpty(post) && !_.isEmpty(categories)) return <Post onUpdate={this.onUpdate} categories={categories} post={post} mode={mode} />;
        if ((mode === MODE_CREATE) && !_.isEmpty(categories)) return <Post onCreate={this.onCreate} categories={categories} mode={mode} />;
        return '';
    }
}

PostPage.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.string,
    post: PropTypes.shape(POST_PROPS),
    categories: PropTypes.arrayOf(PropTypes.shape(CATEGORY_PROPS)),
    mode: PropTypes.oneOf([MODE_VIEW, MODE_CREATE, MODE_EDIT]),
    loadPost: PropTypes.func,
    loadComments: PropTypes.func,
    createPost: PropTypes.func,
    updatePost: PropTypes.func,
};
const mapStateToProps = (state) => ({
    loading: state.get('global').get('loading'),
    error: state.get('global').get('error'),
    categories: state.get('category').get('categories').toJS(),
    post: state.get('post').get('current') ? state.get('post').get('current').toJS() : null,
});

export function mapDispatchToProps(dispatch) {
    return {
        loadPost: (id) => {
            dispatch(loadPostById(id));
        },
        loadComments: (id) => {
            throw 'Not implemented';
        },
        loadCategories: () => {
            dispatch(loadCategories());
        },
        createPost: (post) => {
            dispatch(createPost(post));
        },
        updatePost: (post) => {
            dispatch(updatePost(post));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);