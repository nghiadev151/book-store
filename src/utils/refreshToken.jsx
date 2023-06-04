import React, { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import * as authServices from '../../src/apiService/authService.js';
const RefreshToken = () => {
    
    useEffect(() => {
        if(localStorage.getItem('token') === null){
            return
        }else{
        const refreshToken = setInterval(() => {
            const token = JSON.parse(localStorage.getItem('token'));
        const decodedToken = jwt_decode(token.access_token);
      const expirationTime = decodedToken.exp * 1000;
      const currentTime = Date.now();
      
      if (expirationTime <= currentTime) {
        try {
            console.log(token.refresh_token);
            const fetchnewToken = async () => {
                const response = await authServices.refreshToken();
                localStorage.setItem('token', JSON.stringify(response?.data));
                console.log("token mới: "+JSON.parse(localStorage.getItem('token')).refresh_token);
            };
            fetchnewToken();
       } catch (error) {
        console.log(error);
       }
       
      } 
        }, 1000*60*15);
   
        return () => {
            clearInterval(refreshToken); // Xóa interval khi component unmount
          };
        }
    })
}

export default RefreshToken
