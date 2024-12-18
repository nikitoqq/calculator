import styled from "styled-components";

const DisplayStyle = {
  Field: styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    width: 100%;
    height: 50px;
    margin: 5px;
    font-size: 20px;
  `,
  Wrapper: styled.div`
    display: flex;
    align-items: center;
  `,
};

const Display = ({ text }) => {
  return (
    <DisplayStyle.Wrapper>
      <DisplayStyle.Field>{text}</DisplayStyle.Field>
    </DisplayStyle.Wrapper>
  );
};

export default Display;
