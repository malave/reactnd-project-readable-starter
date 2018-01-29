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
        this.handleOnSave = this.handleOnSave.bind(this);
    }

    state: {
        title: undefined,
        body: undefined,
        author: undefined,
        category: undefined,
    };

    componentWillMount() {
        const { categories } = this.props;
        this.setState({
            category: categories[0].name
        });
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

    handleOnSave() {
        const data = {
            ...this.state,
            id: _.uniqueId(`post-id-${_.random(0, 10000000)}`),
            timestamp: Date.now(),
        };
        this.props.onCreate(data);
    }

    render() {
        const { categories } = this.props;
        const textAreaId = _.uniqueId('post-create-text-area-');
        return (
            <div className={'container'}>
                <Card title='New Post' actions={[<a key={_.uniqueId('post-create-')} onClick={this.handleOnSave}>Save</a>]}>
                    <Input label="Title" name="title" onChange={this.handleInputChange} />
                    <div className="input-field">
                        <textarea id={textAreaId} name="body" className="materialize-textarea" onChange={this.handleInputChange} />
                        <label htmlFor={textAreaId}>Content</label>
                    </div>
                    <Input label="Author" name="author" onChange={this.handleInputChange} />
                    <Input type='select' name="category" defaultValue={this.state.category} label="Category" onChange={this.handleInputChange}>
                        {this.renderCategorySelect(categories)}
                    </Input>
                </Card>
            </div>
        );
    }
}

CreateMode.propTypes = {
    onCreate: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape(CATEGORY_PROPS)).isRequired,
    post: PropTypes.shape(POST_PROPS),
};

export default CreateMode;
