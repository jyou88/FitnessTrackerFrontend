import React, { useEffect, useState } from "react";

export default function UserRoutines() {
  const [routines, setRoutines] = useState([]);
  const [editingRoutine, setEditingRoutine] = useState([]);
  const [isDeleted, setIsDeleted] = useState();

  useEffect(() => {
    const fetchRoutines = async () => {
      const username = localStorage.getItem("username");
      console.log(username);
      const response = await fetch(
        `http://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();

      setRoutines(data);
    };
    fetchRoutines();
  }, [isDeleted]);

  const handleEdit = (routine) => {
    setEditingRoutine(routine);
  };

  const handleChange = (event) => {
    const updatedRoutine = { ...editingRoutine };
    updatedRoutine[event.target.name] = event.target.value;
    setEditingRoutine(updatedRoutine);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // We are going to use our usual fetch
    const response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/routines/${editingRoutine.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(editingRoutine),
      }
    );
    const updatedRoutines = [...routines];
    const index = updatedRoutines.findIndex((r) => r.id === editingRoutine.id);
    updatedRoutines[index] = editingRoutine;
    setRoutines(updatedRoutines);
    setEditingRoutine(null);
  };

  const handleDelete = async (routine) => {
    fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routine.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setIsDeleted(result);
      })
      .catch(console.error);
  };

  return (
    <div>
      {routines.map((routine) => (
        <div key={routine.id}>
          {editingRoutine && editingRoutine.id === routine.id ? (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={editingRoutine.name}
                onChange={handleChange}
              />
              <button type="submit">Save</button>
              <button onClick={() => setEditingRoutine(null)}>Cancel</button>
            </form>
          ) : (
            <>
              <div>
                <span>{routine.name}</span>
                <button onClick={() => handleEdit(routine)}>Edit</button>
              </div>
              <div>
                <button onClick={() => handleDelete(routine)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
