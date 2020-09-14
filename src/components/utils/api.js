import axios from 'axios';

let host = 'https://mean.stagingsdei.com:6047'

// if(process.env.NODE_ENV === 'development'){
//     host = 'http://localhost:8080';
// }else{
//     host = 'http://demoapi.nickgermaine.com';
// }


const API = {
    login: (email, pass, success) => {
        axios.post(`${host}/api/users/login`, { email: email, password: pass }).then(res => {
            success(res)
        })
    },
    signup: (value) => {
        console.log('vlauesss',value)
        // let formData = new FormData();
        // formData.append('firstname', value.firstname);   //append the values with key, value pair
        // formData.append('lastname', value.lastname);   //append the values with key, value pair
        // formData.append('email', value.email);   //append the values with key, value pair
        // formData.append('password', value.password);   //append the values with key, value pair
        // formData.append('profile_image', value.profile_image);   //append the values with key, value pair
        // formData.append('role', value.role);   //append the values with key, value pair
        // formData.append('phone', value.phone);   //append the values with key, value pair
        // formData.append('address', value.address);   //append the values with key, value pair
        // formData.append('city', value.city);   //append the values with key, value pair
        // formData.append('state', value.state);   //append the values with key, value pair
        // formData.append('country', value.country);   //append the values with key, value pair
        // formData.append('zip', value.zip);   //append the values with key, value pair

        const config = {
            headers: {"Accept":"application/json", "Content-Type": "application/json"}
        }
        // console.log('formData',formData)
        axios.post(`${host}/user/register`,JSON.stringify(value),config).then(res => {
            console.log('respoce',res)
            // success(res)
        })
    }
}



export default API