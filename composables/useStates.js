export const useStates = () => {
  const setLoader = (value = false) => {
    const showLoading = useState("showLoading", () => value);
  };

  const setMessage = (value = false, message = "") => {
    const showMessaging = useState("showMessaging", () => value);
    const isMessage = useState("isMessage", () => message);
  };

  return {
    setLoader,
    setMessage,
  };
};
