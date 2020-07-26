import React  from 'react';
import App from "../src/App";

const path = '/'; // 경로
const action = () => <App />; // 경로에 매칭되는 컴포넌트

// function Home() {
//     return (
//         <App/>
//     );
// }

export default { path, action };