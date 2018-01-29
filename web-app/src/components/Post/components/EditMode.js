import PropTypes from 'prop-types';
import React from 'react';
import {
    CATEGORY_PROPS,
    POST_PROPS
} from '../../../constants/propTypes';

class EditMode extends React.Component {
    render() {
        const { post } = this.props;
        return (
            <div>
                Post Edit view {JSON.stringify(post)}
            </div>
        );
    }
}

EditMode.propTypes = {
    post: PropTypes.shape(POST_PROPS).isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape(CATEGORY_PROPS)).isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default EditMode;
