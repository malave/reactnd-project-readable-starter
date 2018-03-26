import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeCategory } from '../../actions/category';
import {
    deletePost,
    loadPosts,
    votePost
} from '../../actions/post';
import {push} from 'react-router-redux';

import PostList from '../../components/PostList';

class HomePage extends React.Component {
    componentDidMount() {
        const { category } = this.props;
        this.props.loadPosts(category);
        this.onVotePost = this.onVotePost.bind(this);
        this.onDeletePost = this.onDeletePost.bind(this);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const { category } = nextProps;
        if (category !== this.props.category) {
            this.props.loadPosts(category);
        }
    }

    onVotePost(id, option) {
        this.props.votePost(id, option);
    }

    onDeletePost(id) {
        this.props.deletePost(id);
    }

    render() {
        const { posts, location, sort, votePost, deletePost,editPost } = this.props;
        const sorted = _.orderBy(posts, [sort.field], [sort.order]);

        return (
            <PostList
                posts={sorted}
                location={location}
                onVotePost={votePost}
                onDeletePost={deletePost}
                onEdit={editPost}
            />
        );
    }
}

HomePage.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.string,
    categories: PropTypes.array,
    posts: PropTypes.array,
    loadCategories: PropTypes.func,
    loadPosts: PropTypes.func,
    votePost: PropTypes.func,
    deletePost: PropTypes.func,

};
const mapStateToProps = (state, ownProps) => ({
    loading: state.get('global').get('loading'),
    error: state.get('global').get('error'),
    categories: state.get('category').get('categories').toJS(),
    category: ownProps.match.params.category,
    posts: state.get('post').get('posts').toJS(),
    sort: state.get('post').get('sort').toJS(),
});

export function mapDispatchToProps(dispatch) {
    return {
        loadPosts: (category) => {
            dispatch(changeCategory(category));
            dispatch(loadPosts({ category }));
        },
        votePost: (id, option) => {
            dispatch(votePost(id, option));
        },
        deletePost: (id) => {
            dispatch(deletePost(id));
        },
        editPost: (category,id) => {
            dispatch(push(`/${category}/${id}/edit`));
        },
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));