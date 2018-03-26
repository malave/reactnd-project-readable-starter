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
import { POST_PROPS } from '../../../constants/propTypes';
import { BAR_MODE_COMPACT } from '../../../constants/strings';
import { PostActionBar } from '../../ActionBar';

class CardMode extends React.Component {

    render() {
        const {
            post,
            onVotePost,
            onDeletePost,
            onEdit,
        } = this.props;
        return (
            <Card
                waves='light'
                className='small hoverable card-mode'
                header={
                    <div>
                        <div className={'card-badges'}>
                            <Badge>{post.commentCount} <Icon tiny right>chat</Icon></Badge>
                            <Badge>{post.voteScore} <Icon tiny right>thumbs_up_down</Icon></Badge>
                        </div>
                        <CardTitle image={post.imageCard}>{post.title}</CardTitle>
                    </div>
                }
                actions={[
                    <NavLink
                        key={`read-${post.id}`}
                        className={'left-align blue-text text-darken-4'}
                        to={`/${post.category}/${post.id}`}
                    >Read</NavLink>,
                    <PostActionBar
                        key={`action-bar-${post.id}`}
                        post={post}
                        onVotePost={onVotePost}
                        onDeletePost={onDeletePost}
                        onEdit={onEdit}
                        mode={BAR_MODE_COMPACT}
                    />
                ]}
            >
                <h6 className={'center-align grey-text text-lighten-1'}>&mdash;
                    <time title={moment(post.timestamp).format('dddd, MMMM Do YYYY, h:mm:ss a')}>{moment(post.timestamp).fromNow()}</time>
                    &nbsp;by {post.author} &mdash;</h6>

            </Card>

        );
    }
}

CardMode.propTypes = {
    post: PropTypes.shape(POST_PROPS).isRequired,
    onVotePost: PropTypes.func.isRequired,
    onDeletePost: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default CardMode;
