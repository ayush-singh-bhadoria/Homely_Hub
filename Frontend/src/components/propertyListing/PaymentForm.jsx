import React from 'react';
import {DatePicker, Space} from "antd";
import {Link} from "react-router-dom";

const PaymentForm = () => {
     const {RangePicker} = DatePicker;
  return (
    <div className='form-container'>
      <form className='payment-form'>
        <div className='price-pernight'>
            Price: <b>&#8377;2000</b>
            <span>/Per night</span>
        </div>
        <div className='payment-field'>
            {/*Date Range*/}
            <div className='date'>
                <Space direction='vertical' size={12}>
                <RangePicker format="YYYY-MM-DD" picker="date"/>
                </Space>
            </div>
            {/*Guests*/}
            <div className="guest"> <label className='payment-labels'> Number of guests:</label><br/>
            <input type="number" className='no-of-guests'
            placeholder='Guest'
            />
            </div>
            {/*Name + phone */}
            <div className='name-phoneno'>
                <label className='payment-labels'>Your Full Name:</label>
                <br/>
                <input
                type="text"
                className='full-name'
                placeholder='Name'
                />
                <br/>
                <label type='number' className='phone-number' placeholder='Number'/>
            </div>
        </div>
        {/*Book Button*/}
        <div className='book-place'>
            <button>
                <Link to={"login"} style={{textDecoration:"none", color:"white"}}>
                Login to Book
                </Link>
            </button>
        </div>
      </form>
    </div>
  )
}

export default PaymentForm
