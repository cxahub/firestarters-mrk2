export const useRuntime = () => {
  // Because your composable is called in the right place in the lifecycle,
  // useRuntimeConfig will also work
  //const config = useRuntimeConfig();
  const config = "Hello World";

  return {
    config,
  };

  // ...
};
