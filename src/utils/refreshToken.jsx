import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import * as authServices from "../../src/apiService/authService.js";
const RefreshToken = () => {
  useEffect(() => {
    let refreshToken;

    refreshToken = setInterval(() => {
      const token = JSON.parse(localStorage.getItem("token"));
      if (token && token.access_token) {
        const decodedToken = jwt_decode(token.access_token);
        const expirationTime = decodedToken.exp * 1000;
        const currentTime = Date.now();
        if (expirationTime <= currentTime) {
          try {
            if (token.refresh_token !== null) {
              const fetchnewToken = async () => {
                const response = await authServices.refreshToken();
                localStorage.setItem("token", JSON.stringify(response?.data));
              };
              fetchnewToken();
            }
          } catch (error) {}
        }
      }
    }, 1000);

    return () => {
      clearInterval(refreshToken); // Xóa interval khi component unmount
    };
  }, []);
};

export default RefreshToken;
