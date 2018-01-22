import React from 'react';

// Home page component
export default class HomePage extends React.Component {
    // render
    render() {
        return (
            <div>
                Home {JSON.stringify(this.props.match.params)}
            </div>
        );
    }
}