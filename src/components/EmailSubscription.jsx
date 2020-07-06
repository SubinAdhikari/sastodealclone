import React from 'react';
import './style/EmailSubscription.css';
const EmailSubscription = () =>{
    return(
        <div className="EmailSubscriptionMainDiv">
            <div className="Text">
                <h6><b>Keep updated & Get Unlimited Offers</b></h6>
                <div className="subText">
                    <h6>Sign up for our newsletter to receive updates & exclusive offers</h6>
                </div>
            </div>
            <div className="inputBox">
            <input type="email" name="search" placeholder="Your Email Address" autoComplete="off" style={{width:'50%',height:'60%',borderRadius:'5px',borderColor:'skyBlue',outline:'none'}}/>
            </div>
        </div>

    )
}
export default EmailSubscription;