import { useEffect } from "react";

const KEY = "W78prSrUqUa74gOzfAj2vZOY7nNlR0yTxeXRzBFA";

function useFetchQuestions(category, dispatch) {
  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        dispatch({ type: "isFetching" });
        const res = await fetch(
          `https://quizapi.io/api/v1/questions?apiKey=${KEY}&category=${category}&limit=10`
        );
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    }

    if (category) fetchData();

    return () => {
      controller.abort();
    };
  }, [category, dispatch]);
}

export default useFetchQuestions;
