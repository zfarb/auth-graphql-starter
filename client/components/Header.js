import React, { Component } from 'react';
import { Link } from 'react-router';

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
            return (
                <div>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                </div>
            );
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left">
                        Home
                    </Link>
                    <ul className="right">{this.renderButtons()}</ul>
                </div>
            </nav>
        );
    }
}

export default Header;
