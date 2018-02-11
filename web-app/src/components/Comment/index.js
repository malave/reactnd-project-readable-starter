import PropTypes from 'prop-types';
import React from 'react';
import { COMMENT_PROPS } from '../../constants/propTypes';
import {
    MODE_CREATE,
    MODE_EDIT,
    MODE_VIEW
} from '../../constants/strings';
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

    renderMode() {
        const {
            mode,
            comment,
            onCreate,
            onUpdate,
            onVoteComment
        } = this.props;
        switch (mode) {
            case MODE_CREATE:
                return <Create
                    mode={MODE_CREATE}
                    onSubmit={onCreate}
                />;
            case MODE_EDIT:
                return <Create
                    mode={MODE_EDIT}
                    comment={comment}
                    onSubmit={onUpdate}
                    setViewMode={this.setMode}
                />;

            default:
                return <View
                    comment={comment}
                    setEditMode={this.setMode}
                    onVoteComment={onVoteComment}
                />;
        }
    }

    render() {

        return <div className={'comment'}>{this.renderMode()}</div>;
    }
}

Comment.propTypes = {
    comment: PropTypes.shape(COMMENT_PROPS),
    mode: PropTypes.oneOf([MODE_VIEW, MODE_CREATE, MODE_EDIT]),
    onCreate: PropTypes.func,
    onUpdate: PropTypes.func,
    onVoteComment: PropTypes.func,
};
Comment.defaultProps = {
    mode: MODE_VIEW,
};
export default Comment;
