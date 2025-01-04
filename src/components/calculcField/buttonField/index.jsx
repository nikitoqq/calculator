import { answer } from "../../../utils/math.";
import { Column, Field } from "./style";
import Button from "./Button";

const ButtonField = ({ setValue, setHistory, value }) => {
  const addSymble = (e) => {
    setValue((value) => value + e.target.innerText);
  };

  const equal = () => {
    displayHistory();
    setValue((value) => answer(value));
  };

  const displayHistory = () => {
    setHistory((history) =>
      history.length > 9 ? [...history.slice(1), value] : [...history, value]
    );
  };

  const delSymble = () => {
    setValue((value) => value.slice(0, -1));
  };

  const delAllSymble = () => {
    setValue("");
  };

  return (
    <Field>
      <Column>
        <Button onClick={(e) => addSymble(e)} name={"1"} />
        <Button onClick={(e) => addSymble(e)} name={"2"} />
        <Button onClick={(e) => addSymble(e)} name={"3"} />
        <Button onClick={(e) => addSymble(e)} name={"+"} />
        <Button onClick={(e) => addSymble(e)} name={"-"} />
      </Column>
      <Column>
        <Button onClick={(e) => addSymble(e)} name={"4"} />
        <Button onClick={(e) => addSymble(e)} name={"5"} />
        <Button onClick={(e) => addSymble(e)} name={"6"} />
        <Button onClick={(e) => addSymble(e)} name={"/"} />
        <Button onClick={(e) => addSymble(e)} name={"*"} />
      </Column>
      <Column>
        <Button onClick={(e) => addSymble(e)} name={"7"} />
        <Button onClick={(e) => addSymble(e)} name={"8"} />
        <Button onClick={(e) => addSymble(e)} name={"9"} />
        <Button onClick={(e) => addSymble(e)} name={"√"} />
        <Button onClick={(e) => addSymble(e)} name={"^"} />
      </Column>
      <Column>
        <Button onClick={(e) => addSymble(e)} name={"0"} />
        <Button onClick={(e) => addSymble(e)} name={"."} />
        <Button onClick={delSymble} name={"C"} />
        <Button onClick={delAllSymble} name={"AC"} />
        <Button onClick={equal} name={"="} />
      </Column>
      <Column>
        <Button
          style={{ width: "185px" }}
          onClick={(e) => addSymble(e)}
          name={"("}
        />
        <Button
          style={{ width: "185px" }}
          onClick={(e) => addSymble(e)}
          name={")"}
        />
      </Column>
    </Field>
  );
};

export default ButtonField;
