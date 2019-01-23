import React, { Component } from 'react';

class Verified extends Component {
    state = { verified: false, loading: true }

    renderContent = () => {
        if(this.state.verified && !this.loading) {
            return (
                <h1>Congrats you are verified!!</h1>
            );
        }
        else if(!this.state.verified && !this.loading) {
            return (
                <h1>Sorry Error happened, try to reload this page!</h1>
            );
        }
        return (
            <h1>Please wait....</h1>
        )
    }
    render() {
        return(
            <div>
                {this.state.Component}
            </div>
        )
    }
}

export default Verified;