import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/lib/popper.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];

let variableArray1 = [
    functionScoped, blockScoped,
    constant1, numberArray1, stringArray1
];

console.log('Working with Arrays:');
console.log(functionScoped);
console.log(blockScoped);
console.log(constant1);
console.log(numberArray1);
console.log(stringArray1);
console.log(variableArray1);