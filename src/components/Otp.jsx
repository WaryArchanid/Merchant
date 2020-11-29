import React from 'react';

const OTP = (props)=>{
    return (
        <>
        <div className="form__group">
            <label htmlFor="otp" className="form__label">OTP</label>
            <input type="text" className="form__field" name="otp" value={props.otp} onChange={props.handleInputChange} id="otp" />
        </div>
        <div className="form__text">
             <span>We sent an OTP to your phone number. <a href="#" className="form__link">Click to Resend</a></span>
             <span>By Proceeding you agree to the <a href="#" className="form__link">terms and conditions of Aero</a> and its <a href="#" className="form__link">privacy and communication policy</a></span>
        </div>
        </>
    );
}

export default OTP;