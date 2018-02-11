import PropTypes from 'prop-types';
import React from 'react';
import { Button, } from 'react-materialize';

class DeleteButton extends React.Component {
    render() {
        const { children, className } = this.props;
        return (
            <Button
                flat waves={'light'}
                onClick={this.props.onClick}
                className={`red lighten-1 white-text text-darken-4  ${className}`}
            >{children}</Button>
        );
    }
}

DeleteButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired
};

DeleteButton.defaultProps = {
    className: '',
    onClick: () => {
    }
};

export default DeleteButton;
