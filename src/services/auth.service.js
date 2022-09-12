import axios from "axios";

const API_URL = "";

const register = (Email,Password,PasswordRetry) => {
  return axios.post(API_URL + "Login/SignUp", {
    Email,
    Password,
    PasswordRetry,
  });
};

const login = (Email,Password) => {
  return axios
    .post(API_URL + "Login/SignIn", {
      Email,
      Password,
    })
    .then((response) => {
      if (response.data.Data.Token) {
        localStorage.setItem("user", JSON.stringify(response.data.Data.Token));
        localStorage.setItem('login',"true")
      
      }

      return response.data.Data.Token;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("login")
  localStorage.setItem("login","false")
  
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));

  
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
