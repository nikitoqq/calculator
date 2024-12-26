import History from "./components/history";
import { Wrapper } from "./appStyle";
import CalcField from "./components/calculcField";

const App = () => {
  const history = [];
  return (
    <Wrapper>
      <CalcField />
      <History history={history} />
    </Wrapper>
  );
};

export default App;
