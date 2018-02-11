import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {
    Card,
    Input,
} from 'react-materialize';
import { COMMENT_PROPS } from '../../../constants/propTypes';
import {
    MODE_CREATE,
    MODE_EDIT,
    MODE_VIEW
} from '../../../constants/strings';

class CreateMode extends React.Component {
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.state = {
            id: _.uniqueId(`comment-id-${_.random(0, 10000000)}`),
            body: undefined,
            author: undefined,
        };
    }

    componentWillMount() {
        const { comment } = this.props;

        if (comment) {
            this.setState({
                ...comment
            });
        }
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
        if (this.props.mode === MODE_EDIT) {
            this.props.setViewMode(MODE_VIEW);
        }
    }

    renderCardAction(label, className, onClick) {
        return <a
            className={className}
            key={_.uniqueId('comment-create-card-action-')}
            onClick={onClick}
        >{label}</a>;
    }

    render() {
        const { comment, mode } = this.props;
        const textAreaId = _.uniqueId('comment-create-text-area-');
        const actions = [this.renderCardAction('Save', 'waves-effect waves-light btn', this.handleOnSubmit)];
        if (mode === MODE_EDIT) {
            actions.push(this.renderCardAction('Cancel', 'waves-effect waves-light btn right', () => this.props.setViewMode(MODE_VIEW)));
        }
        return (
            <div>
                <Card actions={actions}>
                    <div className="col input-field">
                        <textarea
                            id={textAreaId}
                            name="body"
                            value={this.state.body}
                            className={`materialize-textarea ${_.isNil(comment) ? '' : 'active'}`}
                            onChange={this.handleInputChange}
                        />
                        <label className="as active" htmlFor={textAreaId}>Content</label>
                    </div>
                    <Input label="Author" name="author" defaultValue={this.state.author} onChange={this.handleInputChange} />

                </Card>
            </div>
        );
    }
}

CreateMode.propTypes = {
    comment: PropTypes.shape(COMMENT_PROPS),
    onSubmit: PropTypes.func.isRequired,
    setViewMode: PropTypes.func,
    mode: PropTypes.oneOf([MODE_CREATE, MODE_EDIT]),

};

export default CreateMode;
