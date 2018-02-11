import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {
    Card,
    Input,
} from 'react-materialize';
import {
    CATEGORY_PROPS,
    POST_PROPS
} from '../../../constants/propTypes';

class CreateMode extends React.Component {
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.state = {
            id: _.uniqueId(`post-id-${_.random(0, 10000000)}`),
            title: undefined,
            body: undefined,
            author: undefined,
            category: undefined,
        };
    }

    componentWillMount() {
        const { categories, post } = this.props;
        this.setState({
            category: categories[0].name
        });
        if (post) {
            this.setState({
                ...post
            });
        }
    }

    renderCategorySelect(categories) {
        return categories.map(category => <option key={category.name} value={category.name}>{category.name}</option>);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleOnSubmit() {
        const data = {
            ...this.state,
            timestamp: Date.now(),
        };
        this.props.onSubmit(data);
    }

    render() {
        const { categories } = this.props;
        const textAreaId = _.uniqueId('post-create-text-area-');
        return (
            <div className={'container'}>
                <Card
                    title='New Post'
                    actions={[
                        <a className={'waves-effect waves-light btn'} key={_.uniqueId('post-create-')} onClick={this.handleOnSubmit}>Save</a>
                    ]}
                >
                    <Input label="Title" name="title" defaultValue={this.state.title} onChange={this.handleInputChange} />
                    <div className="col input-field">
                        <textarea id={textAreaId} name="body" value={this.state.body} className="materialize-textarea active" onChange={this.handleInputChange} />
                        <label htmlFor={textAreaId}>Content</label>
                    </div>
                    <Input label="Author" name="author" defaultValue={this.state.author} onChange={this.handleInputChange} />
                    <Input type='select' name="category" defaultValue={this.state.category} label="Category" onChange={this.handleInputChange}>
                        {this.renderCategorySelect(categories)}
                    </Input>
                </Card>
            </div>
        );
    }
}

CreateMode.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape(CATEGORY_PROPS)).isRequired,
    post: PropTypes.shape(POST_PROPS),
};

export default CreateMode;
