import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import Comment from '../../components/Comment';
import { MODE_CREATE } from '../../constants/strings';

class CommentList extends React.Component {
    constructor() {
        super();
        this.renderRow = this.renderRow.bind(this);
        this.renderAddCard = this.renderAddCard.bind(this);
    }

    renderRow(comment) {
        const { onCreate, onUpdate, onVoteComment, onDeleteComment } = this.props;
        return <Comment
            key={comment.id}
            comment={comment}
            onUpdate={onUpdate}
            onCreate={onCreate}
            onVoteComment={onVoteComment}
            onDeleteComment={onDeleteComment}
        />;
    }

    renderAddCard() {
        const { onCreate } = this.props;
        return <Comment
            mode={MODE_CREATE}
            key={_.uniqueId('comment-list-row-')}
            onCreate={onCreate}
        />;
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
    onCreate: PropTypes.func,
    onUpdate: PropTypes.func,
    onVoteComment: PropTypes.func,
    onDeleteComment: PropTypes.func,
};

CommentList.defaultProps = {
    comments: []
};
export default CommentList;
