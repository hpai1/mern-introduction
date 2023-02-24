import React from 'react';
import {Route, Routes} from 'react-router-dom';
//import styles from './styles/App.module.css';
import './InputField.css'; 


const InputField= () => {
    return (
        <body className = "parent">
             
            <form> 
                <input type = "input" 
                    placeholder="I need to..." 
                    className = "inputField"> 
                </input>

                <button className = "submitButton" type = "submit"> Submit Task</button>
            </form>
        </body> 
    );
};

export default InputField;