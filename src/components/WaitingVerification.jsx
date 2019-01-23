import React, { Component } from 'react';

class WaitingVerification extends Component {
    render() {
        return (
            <div>
                <h2>Jangan Dibaca!!</h2>
                <p><b>cek email cuk!!</b></p>
                <p>Jika email belum didapat, dimohon untuk clik Resend</p>
                <input type='button' value='Resend Email' /> 
            </div>
        )
    }
}

export default WaitingVerification;