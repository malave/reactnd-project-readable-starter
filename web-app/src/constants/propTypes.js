import PropTypes from 'prop-types';

export const POST_PROPS = {
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
    deleted: PropTypes.bool.isRequired,
};
export const CATEGORY_PROPS = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export const MODE_VIEW = 'mode/view';
export const MODE_CARD = 'mode/card';
export const MODE_EDIT = 'mode/edit';
export const MODE_CREATE = 'mode/create';