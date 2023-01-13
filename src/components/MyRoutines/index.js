import React, { useState } from "react";

const MyRoutines = () => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [postMessage, setPostMessage] = useState("");

  const submitNewRoutine = async () => {
    await fetch("http://fitnesstrac-kr.herokuapp.com/api/routines", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ name, goal, public: true }),
    });
    setPostMessage("Routine Created");
  };

  return (
    <div>
      <h3 color="green">{`${postMessage}`}</h3>
      <form>
        <h1>Create New Routine</h1>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          type="text"
          required
          minLength={5}
          placeholder="name"
          onChange={(event) => setName(event.target.value)}
        ></input>
        <label htmlFor="goal">Goal :</label>
        <input
          value={goal}
          type="text"
          required
          minLength={7}
          placeholder="goal"
          onChange={(event) => setGoal(event.target.value)}
        ></input>
        <button
          onClick={() => {
            submitNewRoutine();
          }}
          type="button"
          name="submit_button"
          value="Submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyRoutines;
