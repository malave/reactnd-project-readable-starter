import React, { Component } from 'react';
import { Input, } from 'react-materialize';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { push } from 'react-router-redux';
import { loadCategories } from '../../actions/category';

class Main extends Component {
    constructor() {
        super();
        this.handleOnCategoryChange = this.handleOnCategoryChange.bind(this);
    }

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

    render() {
        const { categories, category } = this.props;
        return (
            <nav className={'indigo lighten-2'}>
                <div className="nav-wrapper ">
                    <NavLink to='/' className="brand-logo">Readable</NavLink>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Input type='select' value={category} onChange={this.handleOnCategoryChange}>
                                <option key={'default'} value={'default'}>All</option>
                                {this.renderCategorySelect(categories)}
                            </Input>
                        </li>
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
});

export function mapDispatchToProps(dispatch) {
    return {
        loadCategories: () => {
            dispatch(loadCategories());
        },
        onChangeCategory: (category) => dispatch(push(`/${category}`)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);