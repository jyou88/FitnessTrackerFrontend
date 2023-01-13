import React from "react";
import useApi from "../../hooks/useApi";

const Routines = () => {
  const {
    data: routines,
    loading: routinesLoading,
    error: routinesError,
  } = useApi("http://fitnesstrac-kr.herokuapp.com/api/routines", "GET");

  if (routinesLoading) {
    return <div>Routines Loading...</div>;
  }

  if (routinesError) {
    return <div>Error pulling routines</div>;
  }

  return (
    <div>
      <h1>Routines</h1>

      {routines.map((routine) => {
        return (
          <div key={routine.id}>
            <h2>{routine.name}</h2>
            <h3>{routine.creatorName}</h3>
            <h3>{routine.goal}</h3>
            <h3>{routine.activity}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Routines;
