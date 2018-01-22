import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { loadCategories } from '../../actions/category';
import { loadPosts } from '../../actions/post';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.loadCategories();
        this.props.loadPosts();
    }

    render() {
        return (
            <div>
                <code>{JSON.stringify(this.props.categories)}</code>
                <br />
                <code>{JSON.stringify(this.props.posts)}</code>
            </div>
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
const mapStateToProps = (state) => ({
    loading: state.get('global').get('loading'),
    error: state.get('global').get('error'),
    categories: state.get('category').get('categories').toJS(),
    posts: state.get('post').get('posts').toJS(),
});

export function mapDispatchToProps(dispatch) {
    return {
        loadCategories: () => {
            dispatch(loadCategories());
        },
        loadPosts: (category) => {
            dispatch(loadPosts(category));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);