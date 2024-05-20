import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Request from '../helpers/request';


const RecordRun = () => {

    const [selectedDate, setSelectedDate] = useState(Date.now());
    const [distance, setDistance] = useState('');
    const [time, setTime] = useState('');



    const handleDistanceChange = (event) => {
        setDistance(event.target.value);
    }

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    }

    const handleSubmit = () => {
        let data = {
            "date": selectedDate,
            "distance": distance,
            "time": time
        }
        const request = new Request();
        request.post("http://localhost:9000/api/runs", data)
        .then(() => {
            console.log(data);
        })
        
    }


    return(
        <div>
            <h1>Add a new run you absolute champion.</h1>
            <br/>
            <h2>When did you achieve this incredible feat?</h2>
            <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)}/>
            <br/>
            <h2>How many kilometres did you complete like it ain't no thang?</h2>
            <input type="number" id="dist" onChange={handleDistanceChange} value={distance}/>
            <br/>
            <h2>How long did this incredible achievement take?</h2>
            <input type="number" id="time" onChange={handleTimeChange} value={time}/>
            <br/>
            <br/>
            <br/>

            <button onClick={handleSubmit}>Save</button>


        </div>

    )

}

export default RecordRun