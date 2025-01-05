import History from "./Components/History";
import { Wrapper } from "./style";
import CalcField from "./Components/CalculcField";
import { useEffect, useState } from "react";

const App = () => {
  const [history, setHistory] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {

    if (window.localStorage.getItem("history") !== null) {
      const storage = window.localStorage.getItem("history").split(",");
      storage.forEach((item) => {
        setHistory((history) =>
          history.length > 9 ? [...history.slice(1), item] : [...history, item]
        );
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("history", history);
  }, [history]);
  return (
    <Wrapper>
      <CalcField
        history={history}
        value={value}
        setValue={setValue}
        setHistory={setHistory}
      />
      <History setValue={setValue} history={history} />
    </Wrapper>
  );
};

export default App;
