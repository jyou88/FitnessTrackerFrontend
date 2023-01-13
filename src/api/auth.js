const baseURL = "https://fitnesstrac-kr.herokuapp.com/";
const cohort = "2211-FTB-ET-WEB-FT";
//const API_URL = 'https://fitnesstrac-kr.herokuapp.com/api';

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}${cohort}/users/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const {
      data: { token },
    } = await response.json();
    return token;
  } catch (error) {
    console.error(error);
  }
};
export const fetchMe = async (token) => {
  try {
    const response = await fetch(`${baseURL}${cohort}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const login = async (username, password) => {
  try {
    const verify = await fetch(`${baseURL}${cohort}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const data = await verify.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
