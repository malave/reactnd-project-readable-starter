import _ from 'lodash';
import moment from 'moment/moment';
import PropTypes from 'prop-types';
import React from 'react';
import {
    Badge,
    Card,
    CardTitle,
    Icon,
    Modal,
} from 'react-materialize';
import { NavLink, } from 'react-router-dom';

import CommentList from '../../../components/CommentList';
import {
    COMMENT_PROPS,
    POST_PROPS
} from '../../../constants/propTypes';
import {
    VOTE_DOWN,
    VOTE_UP,
} from '../../../constants/strings';
import {
    ActionButton,
    DeleteButton
} from '../../Button';

class ViewMode extends React.Component {
    constructor() {
        super();
        this.state = {
            image: `https://picsum.photos/1024/180/?random&counter=${_.random(0, 100)}`
        };
    }

    render() {
        const {
            post,
            comments,
            onCreateComment,
            onUpdateComment,
            onVoteComment,
            onDeleteComment,
            onDeletePost,
            onVotePost,
        } = this.props;
        return (
            <div>
                <Card
                    header={<CardTitle image={post.imageBanner}>{post.title}</CardTitle>}
                    actions={[
                        <div key={_.random(0, 100)}>
                            <span><i>by <b>{post.author}</b> {moment(post.timestamp).fromNow()}</i></span>
                            <Badge
                                className={'cursor-pointer'}
                                onClick={() => onVotePost(post.id, VOTE_DOWN)}
                            ><Icon>remove</Icon></Badge>
                            <Badge
                                className={'cursor-pointer'}
                                onClick={() => onVotePost(post.id, VOTE_UP)}
                            ><Icon>add</Icon></Badge>
                            <NavLink to={`/${post.category}/${post.id}/edit`}><Badge>&nbsp;<Icon>mode_edit</Icon></Badge></NavLink>
                            <Modal
                                header='Delete'
                                actions={[
                                    <DeleteButton onClick={() => onDeletePost(post.id)} className={'left modal-action modal-close'}>Delete</DeleteButton>,
                                    <ActionButton className={'modal-action modal-close'}>Cancel</ActionButton>,
                                ]}
                                trigger={<Badge className={'cursor-pointer'}>&nbsp;<Icon tiny>delete</Icon></Badge>}
                            >
                                <p>Are you sure you want to delete this post by <b>{post.author}</b>?</p>
                            </Modal>
                            <Badge>{post.commentCount} <Icon>chat</Icon></Badge>
                            <Badge>{post.voteScore} <Icon>thumbs_up_down</Icon></Badge>
                        </div>
                    ]}
                ><p>{post.body}</p></Card>
                <CommentList
                    comments={comments}
                    onCreate={onCreateComment}
                    onUpdate={onUpdateComment}
                    onVoteComment={onVoteComment}
                    onDeleteComment={onDeleteComment}
                />
            </div>
        );
    }
}

ViewMode.propTypes = {
    post: PropTypes.shape(POST_PROPS).isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape(COMMENT_PROPS)),
    onCreateComment: PropTypes.func.isRequired,
    onUpdateComment: PropTypes.func.isRequired,
    onVotePost: PropTypes.func.isRequired,
    onVoteComment: PropTypes.func.isRequired,
    onDeleteComment: PropTypes.func.isRequired,
    onDeletePost: PropTypes.func.isRequired,
};

ViewMode.defaultProps = {
    comments: [],
};
export default ViewMode;
