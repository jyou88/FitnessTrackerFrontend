import { useEffect, useState } from "react";

/**
 *
 * @param {string} apiEndpoint
 * @param {string} httpMethod
 * @param {object} record
 * @param {string} bearerToken
 * @returns {*}
 */
const useApi = (apiEndpoint, httpMethod, record = null, bearerToken = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let headers = {};
        console.log("here");
        if (!bearerToken) {
          headers = {
            "Content-Type": "application/json",
          };
        } else {
          headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${bearerToken}`,
          };
        }

        let fetchOptions = {};
        if (record) {
          const body = JSON.stringify(record);
          fetchOptions = {
            method: httpMethod,
            headers,
            body,
          };
        } else {
          fetchOptions = {
            method: httpMethod,
            headers,
          };
        }

        const response = await fetch(apiEndpoint, fetchOptions);
        const data = await response.json();

        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [apiEndpoint, httpMethod, record, bearerToken]);

  return { data, loading, error };
};

export default useApi;

// Inside of any consuming component make sure to assign this hooks exports (data, loading, and error) to local variables within that component
// Example:
// const {data: localData, loading: localLoading, error: localError} = useApi(apiMethod <-- is a string)
// useApi("https://fitnesstrac-kr.herokuapp.com/api/activities", "POST", {name: chirs}, 'asdflksflkaslairo349v34939srar');
// useApi("http://fitnesstrac-kr.herokuapp.com/api/users/register", "POST");
// useApi("http://fitnesstrac-kr.herokuapp.com/api/users/albert/routines", "GET");
