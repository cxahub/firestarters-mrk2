export const useEvent = () => {
  const getEvent = async () => {
    try {
      const { data } = await useFetch("http://localhost:3000/api/v1/event", {
        mode: "no-cors",
      });

      /*
    const { data: events } = await useFetch(
      "http://localhost:3000/api/v1/event",
      {
        mode: "no-cors",
      }
    );
    */

      return data;
    } catch (error) {
      console.log("My Error: " + error);
    }
  };

  return {
    getEvent,
  };
};
