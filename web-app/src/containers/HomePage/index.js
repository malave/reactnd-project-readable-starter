import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    loadPosts,
    loadPostsByCategory
} from '../../actions/post';
import PostList from '../../components/PostList';

class HomePage extends React.Component {

    componentDidMount() {
        const { category } = this.props;
        this.props.loadPosts(category);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const { category } = nextProps;
        if (category !== this.props.category) {
            this.props.loadPosts(category);
        }
    }

    render() {
        const { posts, location } = this.props;
        return (
            <PostList posts={posts} location={location} />
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

};
const mapStateToProps = (state, ownProps) => ({
    loading: state.get('global').get('loading'),
    error: state.get('global').get('error'),
    categories: state.get('category').get('categories').toJS(),
    category: ownProps.match.params.category,
    posts: state.get('post').get('posts').toJS(),
});

export function mapDispatchToProps(dispatch) {
    return {
        loadPosts: (category) => {
            if (category) {
                dispatch(loadPostsByCategory(category));
            } else {
                dispatch(loadPosts());
            }
        },
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));