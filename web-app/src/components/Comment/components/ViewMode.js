import PropTypes from 'prop-types';
import React from 'react';
import { Card, } from 'react-materialize';
import { COMMENT_PROPS } from '../../../constants/propTypes';
import { CommentActionBar } from '../../ActionBar';

class ViewMode extends React.Component {
    render() {
        const { comment, onVoteComment, setEditMode, onDeleteComment } = this.props;
        return (
            <div>
                <Card
                    actions={[
                        <CommentActionBar
                            key={`comment-action-bar-${comment.id}`}
                            comment={comment}
                            onVoteComment={onVoteComment}
                            onDeleteComment={onDeleteComment}
                            setEditMode={setEditMode}
                        />
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
