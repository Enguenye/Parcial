import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from "./components/app.js";
const axios = require('axios');
axios.get('https://gist.githubusercontent.com/josejbocanegra/36d259fe4a9908c2bda367b5ee9f4ed6/raw/63f9d7c460d09cb22f4299b879b1b868159efff3/tweets.json',{
    responseType: 'json'
  }).then(function(response){
    let datos=response.data;
    ReactDOM.render(<App todo ={datos} />,document.getElementById("root"));
    }
  )

