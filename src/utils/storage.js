export const setStorage = (history) => {
  localStorage.setItem("history", history);
};

export const getStorage = (setHistory) => {
  if (window.localStorage.getItem("history") !== null) {
    const storage = window.localStorage.getItem("history").split(",");
    storage.forEach((item) => {
      setHistory((history) =>
        history.length > 9 ? [...history.slice(1), item] : [...history, item]
      );
    });
  }
};
