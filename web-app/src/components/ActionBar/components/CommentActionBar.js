import _ from 'lodash';
import moment from 'moment/moment';
import PropTypes from 'prop-types';
import React from 'react';
import {
    Badge,
    Icon,
} from 'react-materialize';
import { COMMENT_PROPS } from '../../../constants/propTypes';
import {
    MODE_EDIT,
    VOTE_DOWN,
    VOTE_UP
} from '../../../constants/strings';
import { CommentDeleteModal } from '../../Modal/';

const CommentActionBar = ({ comment, onVoteComment, onDeleteComment, setEditMode }) => {
    return (
        <div key={_.random(0, 100)}>
            <span><i>by <b>{comment.author}</b> {moment(comment.timestamp).fromNow()}</i></span>
            <Badge
                className={'cursor-pointer'}
                onClick={() => onVoteComment(comment.id, VOTE_DOWN)}
            ><Icon tiny>remove</Icon></Badge>
            <Badge
                className={'cursor-pointer'}
                onClick={() => onVoteComment(comment.id, VOTE_UP)}
            ><Icon tiny>add</Icon></Badge>
            <Badge
                className={'cursor-pointer'}
                onClick={() => setEditMode(MODE_EDIT)}
            >&nbsp;<Icon tiny>mode_edit</Icon></Badge>
            <CommentDeleteModal comment={comment} onDeleteComment={onDeleteComment} />
            <Badge>{comment.voteScore}&nbsp;&nbsp;<Icon tiny>thumbs_up_down</Icon></Badge>
        </div>
    );
};

CommentActionBar.propTypes = {
    comment: PropTypes.shape(COMMENT_PROPS).isRequired,
    onVoteComment: PropTypes.func.isRequired,
    onDeleteComment: PropTypes.func.isRequired,
    setEditMode: PropTypes.func.isRequired,
};
CommentActionBar.defaultProps = {};

export default CommentActionBar;
