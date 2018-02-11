import PropTypes from 'prop-types';
import React from 'react';
import { Button, } from 'react-materialize';

class ActionButton extends React.Component {
    render() {
        const { children, className, onClick } = this.props;
        return (
            <Button
                flat waves={'light'}
                onClick={onClick}
                className={`teal lighten-1 white-text text-darken-4 ${className}`}
            >{children}</Button>
        );
    }
}

ActionButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired
};

ActionButton.defaultProps = {
    className: '',
    onClick: () => {
    }
};

export default ActionButton;
