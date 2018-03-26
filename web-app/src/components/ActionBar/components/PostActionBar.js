import PropTypes from 'prop-types';
import React from 'react';
import {
    Badge,
    Icon,
} from 'react-materialize';
import { POST_PROPS } from '../../../constants/propTypes';
import {
    BAR_MODE_COMPACT,
    BAR_MODE_FULL,
    VOTE_DOWN,
    VOTE_UP
} from '../../../constants/strings';
import { PostDeleteModal } from '../../Modal/';

const PostActionBar = ({ mode, post, onVotePost, onDeletePost, onEdit }) => {
    return (
        <div className={'post-action-bar'}>
            <Badge className={'cursor-pointer'} onClick={() => onVotePost(post.id, VOTE_DOWN)}><Icon right tiny={mode === BAR_MODE_COMPACT}>remove</Icon></Badge>
            <Badge className={'cursor-pointer'} onClick={() => onVotePost(post.id, VOTE_UP)}><Icon right tiny={mode === BAR_MODE_COMPACT}>add</Icon></Badge>
            <PostDeleteModal
                post={post}
                onDeletePost={onDeletePost}
                trigger={<Badge className={'cursor-pointer'}>&nbsp;<Icon right tiny={mode === BAR_MODE_COMPACT}>delete</Icon></Badge>}
            />
            <Badge className={'cursor-pointer'} onClick={() => onEdit(post.category, post.id)}><Icon right tiny={mode === BAR_MODE_COMPACT}>mode_edit</Icon></Badge>
        </div>
    );
};

PostActionBar.propTypes = {
    mode: PropTypes.oneOf([BAR_MODE_COMPACT, BAR_MODE_FULL]),
    post: PropTypes.shape(POST_PROPS).isRequired,
    onVotePost: PropTypes.func.isRequired,
    onDeletePost: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};
PostActionBar.defaultProps = {
    mode: BAR_MODE_FULL,
};

export default PostActionBar;
