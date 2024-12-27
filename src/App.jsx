import History from "./components/history";
import { Wrapper } from "./appStyle";
import CalcField from "./components/calculcField";
import { useState } from "react";

const App = () => {
  const [history, setHistory] = useState([]);
  const [value, setValue] = useState("");
  return (
    <Wrapper>
      <CalcField value={value} setValue={setValue} setHistory={setHistory} />
      <History setValue={setValue} history={history} />
    </Wrapper>
  );
};

export default App;
