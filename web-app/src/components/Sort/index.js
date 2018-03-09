import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Icon } from 'react-materialize';

class Sort extends Component {

    render() {
        const { sort } = this.props;
        return (
            <ul className={'sort-component'}>
                <li>Sort by:</li>
                {
                    sort.field === 'timestamp' ?
                        <li onClick={() => this.props.onChange({ field: 'voteScore' })}><Icon className={'cursor-pointer'} tiny>access_time</Icon></li>
                        :
                        <li onClick={() => this.props.onChange({ field: 'timestamp' })}><Icon className={'cursor-pointer'} tiny>thumb_up</Icon></li>
                }
                {
                    sort.order === 'asc' ?
                        <li onClick={() => this.props.onChange({ order: 'desc' })}><Icon className={'cursor-pointer rotate180'} tiny>sort</Icon></li>
                        :
                        <li onClick={() => this.props.onChange({ order: 'asc' })}><Icon className={'cursor-pointer'} tiny>sort</Icon></li>
                }


            </ul>
        );
    }
}

Sort.propTypes = {
    sort: PropTypes.object,
    onChange: PropTypes.func
};
Sort.defaultProps = {};

export default Sort;
