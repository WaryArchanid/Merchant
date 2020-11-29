import React from 'react';
import SuccessLogo from '../images/Success_Icon.png';

const Success = ()=>{
    return (
        <div className="success">
            <h3>Successful Registration</h3>
            <img src={SuccessLogo} />
            <h3>Your Speed Checkout account is setup! You're ready to supercharge your sales</h3>
            <button className="btn">Show me my dashboard</button>
        </div>
    );
}

export default Success;