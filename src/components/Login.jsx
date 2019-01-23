import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Ini Login</h1>
                    <center>
                        <div>
                            <div>
                                <h3>username</h3>
                                <input type="text"/>
                            </div>
                            <div>
                                <h3>password</h3>
                                <input type="password"/>
                            </div>
                            <div>
                                <button>Login</button>
                            </div>
                        </div>
                    </center>
            </div>
        )
    }
}

export default Login;