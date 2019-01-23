import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { onUserRegister } from '../actions'

class Register extends Component {

    onBtnRegisterClick = () => {
        var username = this.refs.username.Value;
        var email = this.refs.email.Value;
        var phone = this.refs.phone.Value;
        var password = this.refs.password.Value;

        this.props.onUserRegister({ username, email, password, phone })
    }

    renderError = () => {
        if(this.props.error.length > 0) {
            return <p className="alert alert-danger">{this.props.error}</p>;
        }
    }

    renderButton = () => {
        if(this.props.loading) {
            return <i className="fa fa-spinner fa-spin" style={{ fontSize: '54px' }}/>
        }
        return <input type="button" name="submit" id="submit" className="submit" defaultValue="Register" onClick={this.onBtnRegisterClick} />
    }
    
    render() {
        if(this.props.username === '') {
            return (
                <div className="bodyRegister">
                    <div className="main">
                        <div className="container">
                            <form className="appointment-form" id="appointment-form">
                                <h2>Welcome to the KeseD Club</h2>
                                <div>
                                    <div>
                                        <input ref="username" type="text" name="name" id="name" placeholder="Username" required />
                                    </div>
                                    <div>
                                        <input ref="email" type="email" name="email" id="email" placeholder="Email" required />
                                    </div>
                                    <div>
                                        <input ref="phone" type="number" name="phone_number" id="phone_number" placeholder="Phone number" required />
                                    </div>
                                    <div>
                                        <input ref="password" type="text" name="password" id="password" placeholder="Password" required />
                                    </div>
                                    <div>
                                        {this.renderError()}
                                    </div>
                                    <div>
                                        {this.renderButton()}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
        return <Redirect to='/waitingverification' />
    }
}

const mapStateToProps = (state) => {
    return { username: state.auth.username, loading: state.auth.loading, error: state.auth.error };
}

export default connect(mapStateToProps, { onUserRegister })(Register);