import React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        
        const email = this.refs.email.value.trim();
        const password = this.refs.password.value.trim();

        Meteor.loginWithPassword({email}, password, (err) => {
            if (err) {
                this.setState({
                    error: err.reason
                });
            } else {
                this.setState({
                    error: ''
                });
            }
        });
    }

    render() {
        return (
            <div className="boxed-view">
                <div className="boxed-view__box">
                    <h1>Short Lnk</h1>
                    
                    { this.state.error ? <p>{this.state.error}</p> : undefined }
                    
                    <form className="boxed-view__form" onSubmit={this.onSubmit} noValidate>
                        <input type="email" ref="email" name="email" placeholder="Email Address"/>
                        <input type="password" ref="password" name="password" placeholder="Password"/>
                        <button className="button">Login</button>
                    </form>

                    <Link to="/signup">Need an account?</Link>
                </div>
            </div>
        );
    }
}

export default Login;
