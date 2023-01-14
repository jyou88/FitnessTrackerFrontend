import React from "react";
import useApi from "../../hooks/useApi";

const Activities = () => {
  const {
    data: activities,
    loading: activitiesLoading,
    error: activitiesError,
  } = useApi("http://fitnesstrac-kr.herokuapp.com/api/activities", "GET");

  if (activitiesLoading) {
    return <div>Routines Loading...</div>;
  }

  if (activitiesError) {
    return <div>Error pulling routines</div>;
  }

  return (
    <>
      <h1>Activities</h1>
      <div>
        {activities.length &&
          activities.map((activity) => <div>{activity.name}</div>)}
      </div>
    </>
  );
};

export default Activities;
