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
    localStorage.setItem("username", data.user.username);
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
