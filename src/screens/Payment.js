import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
export default function Payment(props) {
    const location = useLocation();
    const propsData = location.state;
    const [amount, setamount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        var options = {
            key: "rzp_test_S2vBtSz2Hkhaie",
            key_secret: "LLaWYcTrsuD8K625I1EvkZVi",
            amount: 500 * 100,
            currency: "INR",
            name: "MediCheck Payment Portal",
            description: "Pay To MediCheck",
            handler: function (response) {
                alert(response.razorpay_payment_id);
            },
            prefill: {
                name: "Abc",
                email: "abc123@gmail.com",
                contact: "9111111111"
            },
            notes: {
                address: "Razorpay Corporate office"
            },
            theme: {
                color: "#3399cc"
            }
        };
        var pay = new window.Razorpay(options);
        pay.open();
    }
    return (
        <div className='container'>
            <div className='text-center'>
                <img src={propsData.docImage} className="mt-3 rounded mx-auto h-50 w-50 d-block hover-zoom mb-3" alt="..." />
                <div className='h2'>You can consult with {propsData.docname} in just ₹ 500</div>
                <button className='btn m-2 h-40 w-40 bg-info' onChange={(e) => setamount(500)} onClick={handleSubmit} >Pay ₹ 500</button>
            </div>
        </div>
    )
}
