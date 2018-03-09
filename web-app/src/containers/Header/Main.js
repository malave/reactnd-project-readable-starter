import _ from 'lodash';
import React, { Component } from 'react';
import { Input } from 'react-materialize';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { push } from 'react-router-redux';
import { loadCategories } from '../../actions/category';
import { sortPosts } from '../../actions/post';
import Sort from '../../components/Sort';

class Main extends Component {
    constructor() {
        super();
        this.handleOnCategoryChange = this.handleOnCategoryChange.bind(this);
        this.onSort = this.onSort.bind(this);
    }

    state = {
        dropdownId: _.uniqueId('main-container-')
    };

    componentDidMount() {
        this.props.loadCategories();
    }

    handleOnCategoryChange(evt) {
        if (evt !== undefined && evt.preventDefault) evt.preventDefault();
        const category = evt.target.value === 'default' ? '' : evt.target.value;
        this.props.onChangeCategory(category);
    }

    renderCategorySelect(categories) {
        return categories.map(category => <option key={category.name} value={category.name}>{category.name}</option>);
    }

    onSort(sort) {
        this.props.sortPosts(Object.assign({}, this.props.sort, sort));
    }

    render() {
        const { categories, category } = this.props;
        return (
            <nav className={'blue darken-1'}>
                <div className="nav-wrapper ">
                    <NavLink to='/' className="brand-logo">Readable</NavLink>
                    <ul className="right">
                        <li>
                            <Input type='select' value={category} onChange={this.handleOnCategoryChange}>
                                <option key={'default'} value={'default'}>All</option>
                                {this.renderCategorySelect(categories)}
                            </Input>
                        </li>
                        <li><Sort sort={this.props.sort} onChange={this.onSort} /></li>

                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.get('global').get('loading'),
    error: state.get('global').get('error'),
    categories: state.get('category').get('categories').toJS(),
    category: state.get('category').get('current'),
    sort: state.get('post').get('sort').toJS(),
});

export function mapDispatchToProps(dispatch) {
    return {
        loadCategories: () => {
            dispatch(loadCategories());
        },
        onChangeCategory: (category) => dispatch(push(`/${category}`)),
        sortPosts: (sort) => dispatch(sortPosts(sort)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);