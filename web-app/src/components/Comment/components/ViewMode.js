import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import {
    Badge,
    Card,
    Icon,
    Modal,
} from 'react-materialize';
import { COMMENT_PROPS } from '../../../constants/propTypes';
import {
    MODE_EDIT,
    VOTE_DOWN,
    VOTE_UP
} from '../../../constants/strings';
import {
    ActionButton,
    DeleteButton
} from '../../Button';

class ViewMode extends React.Component {
    render() {
        const { comment } = this.props;
        return (
            <div>
                <Card
                    actions={[
                        <div key={_.random(0, 100)}>
                            <span><i>by <b>{comment.author}</b> {moment(comment.timestamp).fromNow()}</i></span>
                            <Badge
                                className={'cursor-pointer'}
                                onClick={() => this.props.onVoteComment(comment.id, VOTE_DOWN)}
                            ><Icon>remove</Icon></Badge>
                            <Badge
                                className={'cursor-pointer'}
                                onClick={() => this.props.onVoteComment(comment.id, VOTE_UP)}
                            ><Icon>add</Icon></Badge>
                            <Badge
                                className={'cursor-pointer'}
                                onClick={() => this.props.setEditMode(MODE_EDIT)}
                            >&nbsp;<Icon>mode_edit</Icon></Badge>
                            <Modal
                                header='Delete'
                                actions={[
                                    <DeleteButton onClick={() => this.props.onDeleteComment(comment.id)} className={'left modal-action modal-close'}>Delete</DeleteButton>,
                                    <ActionButton className={'modal-action modal-close'}>Cancel</ActionButton>,
                                ]}
                                trigger={<Badge className={'cursor-pointer'}>&nbsp;<Icon tiny>delete</Icon></Badge>}
                            >
                                <p>Are you sure you want to delete this comment by <b>{comment.author}</b>?</p>
                            </Modal>
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
    onDeleteComment: PropTypes.func.isRequired,
};

export default ViewMode;
