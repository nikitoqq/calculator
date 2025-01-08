export const getStorage = () => {
  if (window.localStorage.getItem("history") !== null) {
    return window.localStorage.getItem("history").split(",");
  }
};
