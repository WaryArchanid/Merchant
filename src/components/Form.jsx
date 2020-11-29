import React,  { Component } from "react";
import OTP from './Otp';
import FormWrapper from './FormWrapper';
import Success from './Success';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOtpShown: !1,
            success: !1,
            btnText: 'I want this',
            storeName: `Hansel's`,
            email: 'Shane@gmail.com',
            phone: '8225558885',
            delivery: '',
            notes: '',
            otp: '123456'
        }
        this.onHandleChange = this.onHandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onHandleChange(event){
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    handleSubmit(event){
        if(!this.state.isOtpShown)
            this.setState({
                isOtpShown: !0,
                btnText: 'Proceed'
            });
        else
            this.setState({
                success: !0,
            })    

        event.preventDefault();
    }

    render(){
        const otpInput = this.state.isOtpShown ? 
                        <OTP otp={this.state.otp} handleInputChange={this.onHandleChange}/> 
                        : null;
        const hasForm = this.state.success ? <Success /> : 
        <FormWrapper>
                <form  onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label htmlFor="storeName" className="form__label">Your store's name</label>
                        <input type="text" className="form__field" name="storeName" value={this.state.storeName} onChange={this.onHandleChange} id="storeName" placeholder="Your store's name" />
                    </div>
                    <div className="form__group">
                        <label htmlFor="storeName" className="form__label">Your email ID</label>
                        <input type="email" className="form__field" name="email" value={this.state.email} onChange={this.onHandleChange} id="email" placeholder="Your email ID" />
                    </div>
                    <div className="form__group">
                        <label htmlFor="storeName" className="form__label">Your phone number</label>
                        <input type="text" className="form__field" name="phone" value={this.state.phone} onChange={this.onHandleChange} id="phone" placeholder="Your phone number" />
                    </div>
                    <div className="form__group">
                        <label htmlFor="storeName" className="form__label">Delivery location</label>
                        <input type="text" className="form__field" name="delivery" value={this.state.delivery} onChange={this.onHandleChange} id="delivery" placeholder="Type to search" />
                    </div>
                    <div className="form__group">
                        <label htmlFor="storeName" className="form__label">Notes for delivery</label>
                        <input type="text" className="form__field" name="notes" value={this.state.notes} onChange={this.onHandleChange} id="notes" placeholder="Put in the house number / shop number" />
                    </div>
                    {otpInput}
                    <input type="submit" className="btn" value={this.state.btnText}/>
            </form> 
          </FormWrapper>;
        return hasForm;
    }
}

export default Form;