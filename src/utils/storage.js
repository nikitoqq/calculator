export const getStorage = () => {
  if (window.localStorage.getItem("history") !== null || window.localStorage.getItem("history") !== undefined) {
    return window.localStorage.getItem("history").split(",");
  }
  return []
};
