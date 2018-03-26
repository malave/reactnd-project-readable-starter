import PropTypes from 'prop-types';
import React from 'react';
import {
    Badge,
    Icon,
    Modal,
} from 'react-materialize';
import { COMMENT_PROPS } from '../../../constants/propTypes';
import {
    ActionButton,
    DeleteButton
} from '../../Button';

const CommentDeleteModal = ({ comment, onDeleteComment }) => {
    return (
        <Modal
            header='Delete'
            actions={[
                <DeleteButton onClick={() => onDeleteComment(comment.id)} className={'left modal-action modal-close'}>Delete</DeleteButton>,
                <ActionButton className={'modal-action modal-close'}>Cancel</ActionButton>,
            ]}
            trigger={<Badge className={'cursor-pointer'}>&nbsp;<Icon tiny>delete</Icon></Badge>}
        >
            <p>Are you sure you want to delete this comment by <b>{comment.author}</b>?</p>
        </Modal>
    );
};

CommentDeleteModal.propTypes = {
    comment: PropTypes.shape(COMMENT_PROPS).isRequired,
    onDeleteComment: PropTypes.func.isRequired,
};
CommentDeleteModal.defaultProps = {};

export default CommentDeleteModal;