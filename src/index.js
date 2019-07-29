import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from "./reset"
import store from "@store";
import {Provider} from "react-redux"

ReactDOM.render(
    <Fragment>
        <App />
        <GlobalStyle/>
    </Fragment>
    , document.getElementById('root'));


