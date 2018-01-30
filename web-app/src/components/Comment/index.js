import PropTypes from 'prop-types';
import React from 'react';
import {
    COMMENT_PROPS,
    MODE_CREATE,
    MODE_EDIT,
    MODE_VIEW
} from '../../constants/propTypes';
import Create from './components/CreateMode';
import View from './components/ViewMode';

class Comment extends React.Component {
    constructor() {
        super();
        this.state = {
            mode: undefined
        };
        this.setMode = this.setMode.bind(this);

    }

    componentWillMount() {
        this.setState({ mode: this.props.mode });
    }

    setMode(mode) {
        this.setState({ mode });
    }

    renderMode(mode, comment) {
        switch (this.state.mode) {
            case MODE_CREATE:
                return <Create mode={MODE_CREATE} onSubmit={this.props.onCreate} />;
            case MODE_EDIT:
                return <Create mode={MODE_EDIT} comment={comment} onSubmit={this.props.onUpdate} setViewMode={this.setMode} />;

            default:
                return <View comment={comment} setEditMode={this.setMode} />;
        }
    }

    render() {
        const { mode, comment } = this.props;
        return <div className={'comment'}>{this.renderMode(mode, comment)}</div>;
    }
}

Comment.propTypes = {
    comment: PropTypes.shape(COMMENT_PROPS),
    mode: PropTypes.oneOf([MODE_VIEW, MODE_CREATE, MODE_EDIT]),
    onCreate: PropTypes.func,
    onUpdate: PropTypes.func,
};
Comment.defaultProps = {
    mode: MODE_VIEW,
};
export default Comment;
