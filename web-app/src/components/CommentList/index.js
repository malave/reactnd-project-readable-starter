import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import Comment from '../../components/Comment';
import { MODE_CREATE } from '../../constants/propTypes';

class CommentList extends React.Component {
    constructor() {
        super();
        this.renderRow = this.renderRow.bind(this);
        this.renderAddCard = this.renderAddCard.bind(this);
    }

    renderRow(comment) {
        const { onCreate, onUpdate } = this.props;
        return <Comment key={comment.id} comment={comment} onUpdate={onUpdate} onCreate={onCreate} />;
    }

    renderAddCard() {
        const { onCreate } = this.props;
        return <Comment mode={MODE_CREATE} key={_.uniqueId('comment-list-row-')} onCreate={onCreate} />;
    }

    render() {
        const { comments } = this.props;
        const rows = comments.map(this.renderRow);
        rows.push(this.renderAddCard());
        return (
            <div className={'container'}> {rows}</div>
        );
    }
}

CommentList.propTypes = {
    comments: PropTypes.array,
    onCreate: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

CommentList.defaultProps = {
    comments: []
};
export default CommentList;
