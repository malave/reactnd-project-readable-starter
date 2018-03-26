import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import {
    Badge,
    Card,
    CardTitle,
    Icon,
} from 'react-materialize';
import {
    COMMENT_PROPS,
    POST_PROPS
} from '../../../constants/propTypes';
import { PostActionBar } from '../../ActionBar';
import CommentList from '../../CommentList';

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
            onEdit,
        } = this.props;
        return (
            <div>
                <Card
                    className={'view-mode'}
                    header={
                        <div>
                            <div className={'card-badges'}>
                                <Badge>{post.commentCount} <Icon tiny right>chat</Icon></Badge>
                                <Badge>{post.voteScore} <Icon tiny right>thumbs_up_down</Icon></Badge>
                            </div>
                            <CardTitle image={post.imageBanner}>{post.title}</CardTitle>
                        </div>
                    }
                    actions={[
                        <span key={`author-${post.id}`}><i>by <b>{post.author}</b> {moment(post.timestamp).fromNow()}</i></span>,
                        <PostActionBar
                            key={`post-action-bar-${post.id}`}
                            post={post}
                            onVotePost={onVotePost}
                            onDeletePost={onDeletePost}
                            onEdit={onEdit}
                        />
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
    onEdit: PropTypes.func.isRequired,
};

ViewMode.defaultProps = {
    comments: [],
};
export default ViewMode;
