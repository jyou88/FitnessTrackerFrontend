const baseURL = "https://fitnesstrac-kr.herokuapp.com/";
const cohort = "2211-FTB-ET-WEB-FT";

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );
    const result = await response.json();
    return result.token;
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
    const verify = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );
    const data = await verify.json();
    console.log(data);
    // right here put the returned data.token into localStorage so that we can use it across our app.
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createRoutine = async (name, goal) => {
  try {
    const routine = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/routines`,
      {
        method: "POST",

        body: JSON.stringify({ name, goal }),
      }
    );
    const data = await routine.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
