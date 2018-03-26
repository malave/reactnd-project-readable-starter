import PropTypes from 'prop-types';
import React from 'react';
import { Modal, } from 'react-materialize';
import { POST_PROPS } from '../../../constants/propTypes';
import {
    ActionButton,
    DeleteButton
} from '../../Button';

const PostDeleteModal = ({ post, onDeletePost, trigger }) => {
    return (
        <Modal
            header='Delete'
            actions={[
                <DeleteButton onClick={() => onDeletePost(post.id)} className={'left modal-action modal-close'}>Delete</DeleteButton>,
                <ActionButton className={'modal-action modal-close'}>Cancel</ActionButton>,
            ]}
            trigger={trigger}
        >
            <p>Are you sure you want to delete this post by <b>{post.author}</b>?</p>
        </Modal>
    );
};

PostDeleteModal.propTypes = {
    post: PropTypes.shape(POST_PROPS).isRequired,
    onDeletePost: PropTypes.func.isRequired,
    trigger: PropTypes.element.isRequired,
};
PostDeleteModal.defaultProps = {};

export default PostDeleteModal;