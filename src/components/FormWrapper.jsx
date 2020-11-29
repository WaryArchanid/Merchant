import React from "react";
import icon from '../images/icon.svg';

const FormWrapper = (props)=>{
    return (
        <div className="form">
            <img src={icon} height={50} width={50}/>
            <h4>Just give us some basic details</h4>
            {props.children}
        </div>
    );
}

export default FormWrapper;