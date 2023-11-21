import nuxtStorage from "nuxt-storage";

export const useAuth = () => {
  //Get runtime config.
  const config = useRuntimeConfig();

  const route = useRoute();

  const setLogIn = (email, remember) => {
    setAuthenticated();
    setCookies(email, remember);
    navigateTo("/profile");
  };

  const setLogOut = () => {
    nuxtStorage.localStorage.clear();
    navigateTo("/");
  };

  const checkAuth = () => {
    if (!nuxtStorage.localStorage.getData("isAuthenticated")) {
      navigateTo("/");
    }
  };

  const setCookies = (email, remember) => {
    //Set cookies.
    const user_email = useCookie("user_email", {
      maxAge: config.public.COOKIE_EXPIRES,
    });

    const user_remember = useCookie("user_remember", {
      maxAge: config.public.COOKIE_EXPIRES,
    });

    //Set cookie values.
    user_email.value = email;
    user_remember.value = remember;
  };

  const setAuthenticated = () => {
    nuxtStorage.localStorage.setData(
      "isAuthenticated",
      true,
      config.public.LOCAL_STORAGE_EXPIRES
    );
  };

  return {
    setLogIn,
    setLogOut,
    checkAuth,
  };
};
