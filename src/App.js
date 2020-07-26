import React, {useState, useEffect} from 'react';
import moment from "moment";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function App() {

    const [time, setTime] = useState(null);

    useEffect(() => {
        console.log('use effect..');
        setTime(moment().format('hh:mm:ss a'));
    }, []);

    return (
        <div style={{height:'100%'}}>
            <Header/>
            <div style={{height:'100%'}}>
                <h1>Sample App</h1>
                <p>Current time is {time}</p>
            </div>
            <Footer/>
        </div>
    )

}
