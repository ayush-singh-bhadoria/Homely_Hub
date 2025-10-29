import React,{useState} from 'react';
import {DatePicker, Space} from "antd";
import "react-datepicker/dist/react-datepicker.css";
import "../../css/Home.css";
import dayjs from "dayjs";

const {RangePicker} = DatePicker;

const Search = () => {
  const [keyword, setKeyword] = useState({
        city: "",
        guests: "",
        dateIn: "" ,
        dateOut: ""
      });
        const [value, setValue] = useState([]);

        function searchHandler(e){
            e.preventDefault();
            setKeyword({city: "",guests: "",
                dateIn: "",
                dateOut:""
            })
            setValue([])
        }

        function returnDates(date,dateString){
            setValue([date[0], date[1]]);
            updateKeyword("dateIn",dateString[0]);
            updateKeyword("dateOut", dateString[1]);
        }
        const updateKeyword = (field,value)=>{setKeyword((prevKeyword) =>({
            ...prevKeyword,
            [field]: value
        }));
    }
  return (
    <>
    <div className='searchbar'>
        <input
        className='search'
        id='search_destination'
        placeholder='Search_destination'
        type='text'
        value={keyword.city}
        onChange={(e) => updateKeyword("city", e.target.value)}
      />
      <Space direction='vertical' size={12} className='search'>
        <RangePicker
        value = {value}
        format="DD-MM-YYYY"
        className="date_picker"
        disabledDate={(current) => {
            return current && current.isBefore(dayjs().startOf("day"))
        }}
        onChange={returnDates}
        />
      </Space>
      <input
      className='search'
      id='addguest'
      placeholder='Add Guests'
      type='number'
      value={keyword.guests}
      onChange={(e) => updateKeyword("guests", e.target.value)}    
      />
      <span className='material-symbols-outlined searchicon' onClick={searchHandler}>search</span> 
    </div>
    </>
  )
}

export default Search
