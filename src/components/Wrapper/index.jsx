import { useState, useEffect } from "react";

import { CalcField } from "../CalcField";
import { History } from "../History";

import { getStorage, setStorage } from "../../utils/storage";
import { StyledWrapper } from "./style";

export const Wrapper = () => {
  const [history, setHistory] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    getStorage(setHistory);
  }, []);

  useEffect(() => {
    setStorage(history);
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
