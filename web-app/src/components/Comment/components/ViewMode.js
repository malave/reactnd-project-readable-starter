import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import {
    Badge,
    Card,
    Icon,
} from 'react-materialize';
import { COMMENT_PROPS } from '../../../constants/propTypes';
import {
    MODE_EDIT,
    VOTE_DOWN,
    VOTE_UP
} from '../../../constants/strings';

class ViewMode extends React.Component {
    render() {
        const { comment } = this.props;
        return (
            <div>
                <Card
                    actions={[
                        <div key={_.random(0, 100)}>
                            <span><i>by <b>{comment.author}</b> {moment(comment.timestamp).fromNow()}</i></span>
                            <Badge onClick={() => this.props.onVoteComment(comment.id, VOTE_DOWN)}><Icon>remove</Icon></Badge>
                            <Badge onClick={() => this.props.onVoteComment(comment.id, VOTE_UP)}><Icon>add</Icon></Badge>
                            <Badge
                                onClick={() => {
                                    this.props.setEditMode(MODE_EDIT);
                                }}
                            >&nbsp;<Icon>mode_edit</Icon></Badge>
                            <Badge>&nbsp;<Icon tiny>delete</Icon></Badge>
                            <Badge>{comment.voteScore}&nbsp;&nbsp;<Icon tiny>thumbs_up_down</Icon></Badge>
                        </div>
                    ]}
                ><p>{comment.body}</p>
                </Card>
            </div>
        );
    }
}

ViewMode.propTypes = {
    comment: PropTypes.shape(COMMENT_PROPS).isRequired,
    setEditMode: PropTypes.func.isRequired,
    onVoteComment: PropTypes.func.isRequired,
};

export default ViewMode;
