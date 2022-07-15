import axios from "axios";

const API_URL='http://localhost:8080'
const URL = process.env.REACT_APP_URL

const login = async (userData) => {
  const res = await axios.post(API_URL+'/users/login', userData)
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data
}

const authService = {
    login,
  };
  
  export default authService;