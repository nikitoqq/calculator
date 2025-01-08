import { useState, useEffect } from "react";

import { CalcField } from "../CalcField";
import { History } from "../History";

import { getStorage} from "../../utils/storage";
import { StyledWrapper } from "./style";

export const Wrapper = () => {
  const [history, setHistory] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    getStorage().forEach((item) => {
      setHistory((history) =>
        history.length > 9 ? [...history.slice(1), item] : [...history, item]
      );
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("history", history);
  }, [history]);

  return (
    <StyledWrapper>
      <CalcField
        history={history}
        value={value}
        setValue={setValue}
        setHistory={setHistory}
      />
      <History setValue={setValue} history={history} />
    </StyledWrapper>
  );
};
