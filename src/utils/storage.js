export const getStorage = () => {
  if (window.localStorage.getItem("history") !== undefined) {
    return window.localStorage.getItem("history").split(",");
  }
  return []
};
