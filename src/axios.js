import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.00.1:5001/challenge-cef04/us-central1/api', 
    //THE API (cloud function) URL
});

export default instance;