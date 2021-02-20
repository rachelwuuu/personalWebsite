import React from "react";
import styleSheet from './home.css';
const HomePage = () =>{
    return(
        <div className="container">
            <h1 className="buddify">Buddify!</h1>
            <div className="content">
                <h1>Find your next group of buddies.</h1>
                <a href="/login" class="button">Let's get started</a>
            </div>
            
        </div>
    );    
};
export default HomePage;
