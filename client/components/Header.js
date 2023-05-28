import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

        this.renderButtons = this.renderButtons.bind(this);
    }

    renderButtons() {
        const { loading, user } = this.props;

        if (loading) {
            return <div />;
        }

        if (user) {
            return <div>Logout</div>;
        } else {
            return <div>Login or Sign Up</div>;
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">{this.renderButtons()}</div>
            </nav>
        );
    }
}

export default Header;
