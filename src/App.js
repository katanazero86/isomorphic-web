import React, {useState, useEffect} from 'react';
import moment from "moment";

export default function App() {

    const [time, setTime] = useState(null);

    useEffect(() => {

        setTime(moment().format('hh:mm:ss a'));

    }, []);

    return (
        <div>
            <h1>Sample App</h1>
            <p>Current time is {time}</p>
        </div>
    )

}
