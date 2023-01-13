import React from "react";
import useApi from "../../hooks/useApi";

const Activities = () => {
  const {
    data: activities,
    loading: activitiesLoading,
    error: activitiesError,
  } = useApi("http://fitnesstrac-kr.herokuapp.com/api/activities", "GET");

  return (
    <>
      <h1>Activities</h1>
      <div>
        {/* {activities &&
          activities.length >= 1 &&
          activities.map((activity) => <div>{activity.name}</div>)} */}

        {activities.length &&
          activities.map((activity) => <div>{activity.name}</div>)}
      </div>
    </>
  );
};

export default Activities;

// const publicActivities = ({ activities, setActivities }) => {
//   let activitiesToMap = activities.map((activity, index) => {
//     return (
//       <div className="activities" key={index}>
//         <h2>{activities.name}</h2>
//       </div>
//     );
//   });
//   );
// };
