import { answer } from "../../../scripts/scripts";
import { Column, Field } from "./btnFieldStyle";
import Button from "./button";

const ButtonField = ({ calcValue, setDisplayValue, setCalcValue }) => {
  const addSymble = (e) => {
    setCalcValue((value) => value + e.target.value);
    setDisplayValue((value) => value + e.target.innerText);
  };

  const equal = () => {
    // Code....
    console.log(answer(calcValue));
  };

  const delSymble = () => {
    setCalcValue((value) => value.slice(0, -1));
    setDisplayValue((value) => value.slice(0, -1));
  };

  const delAllSymble = () => {
    setCalcValue("");
    setDisplayValue("");
  };

  return (
    <Field>
      <Column>
        <Button
          onClick={(e) => {
            addSymble(e);
          }}
          value={"1"}
          name={"1"}
        />
        <Button
          onClick={(e) => {
            addSymble(e);
          }}
          value={"2"}
          name={"2"}
        />
        <Button
          onClick={(e) => {
            addSymble(e);
          }}
          value={"3"}
          name={"3"}
        />
        <Button
          onClick={(e) => {
            addSymble(e);
          }}
          value={"+"}
          name={"+"}
        />
        <Button
          onClick={(e) => {
            addSymble(e);
          }}
          value={"-"}
          name={"-"}
        />
      </Column>
      <Column>
        <Button
          onClick={(e) => {
            addSymble(e);
          }}
          value={"4"}
          name={"4"}
        />
        <Button
          onClick={(e) => {
            addSymble(e);
          }}
          value={"5"}
          name={"5"}
        />
        <Button
          onClick={(e) => {
            addSymble(e);
          }}
          value={"6"}
          name={"6"}
        />
        <Button
          onClick={(e) => {
            addSymble(e);
          }}
          value={"/"}
          name={"/"}
        />
        <Button
          onClick={(e) => {
            addSymble(e);
          }}
          value={"*"}
          name={"*"}
        />
      </Column>
      <Column>
        <Button
          onClick={(e) => {
            addSymble(e);
          }}
          value={"7"}
          name={"7"}
        />
        <Button
          onClick={(e) => {
            addSymble(e);
          }}
          value={"8"}
          name={"8"}
        />
        <Button
          onClick={(e) => {
            addSymble(e);
          }}
          value={"9"}
          name={"9"}
        />
        <Button
          onClick={(e) => {
            addSymble(e);
          }}
          value={"Math.sqrt(a)"}
          name={"√"}
        />
        <Button
          onClick={(e) => {
            addSymble(e);
          }}
          value={"Math.pow(x,y)"}
          name={"^"}
        />
      </Column>
      <Column>
        <Button
          onClick={(e) => {
            addSymble(e);
          }}
          value={"0"}
          name={"0"}
        />
        <Button
          onClick={(e) => {
            addSymble(e);
          }}
          value={"."}
          name={","}
        />
        <Button onClick={delSymble} value={""} name={"C"} />
        <Button onClick={delAllSymble} value={""} name={"AC"} />
        <Button onClick={equal} value={""} name={"="} />
      </Column>
    </Field>
  );
};

export default ButtonField;
