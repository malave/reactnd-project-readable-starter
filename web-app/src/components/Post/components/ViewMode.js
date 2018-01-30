import _ from 'lodash';
import moment from 'moment/moment';
import PropTypes from 'prop-types';
import React from 'react';
import {
    Badge,
    Card,
    CardTitle,
    Icon,
} from 'react-materialize';
import { NavLink, } from 'react-router-dom';

import CommentList from '../../../components/CommentList';
import {
    COMMENT_PROPS,
    POST_PROPS
} from '../../../constants/propTypes';

class ViewMode extends React.Component {
    constructor() {
        super();
        this.state = {
            image: `https://picsum.photos/1024/180/?random&counter=${_.random(0, 100)}`
        };
    }

    render() {
        const { post, comments, onCreateComment, onUpdateComment } = this.props;
        return (
            <div>
                <Card
                    header={<CardTitle image={this.state.image}>{post.title}</CardTitle>}
                    actions={[
                        <div key={_.random(0, 100)}>
                            <span><i>by <b>{post.author}</b> {moment(post.timestamp).fromNow()}</i></span>
                            <NavLink to={`/${post.category}/${post.id}/edit`}> <Badge>&nbsp;<Icon>mode_edit</Icon></Badge></NavLink>
                            <Badge>{post.commentCount} <Icon>chat</Icon></Badge>
                            <Badge>{post.voteScore} <Icon>thumbs_up_down</Icon></Badge>
                        </div>
                    ]}
                ><p>{post.body}</p></Card>
                <CommentList comments={comments} onCreate={onCreateComment} onUpdate={onUpdateComment} />
            </div>
        );
    }
}

ViewMode.propTypes = {
    post: PropTypes.shape(POST_PROPS).isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape(COMMENT_PROPS)),
    onCreateComment: PropTypes.func.isRequired,
    onUpdateComment: PropTypes.func.isRequired,
};

ViewMode.defaultProps = {
    comments: [],
};
export default ViewMode;
