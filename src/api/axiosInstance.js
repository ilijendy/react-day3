import axios from "axios";

const axiosInstance=axios.create({
    baseUrl:'https://fakestoreapi.com',
    timeout:5000
})