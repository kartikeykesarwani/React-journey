import React from "react";
import styled from "styled-components";

//import "./Person.css";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0px 3px 3px 3px #ccc;
  padding: 16px 16px;
  text-align: center;
  background-color: #f0f0f0;

  @media (min-width: 600px) {
    width: 450px;
  }
`;

const person = (props) => {
  return (
    //<div className="Person" style={style}>
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age}!
      </p>
      <p> {props.children}</p>
      <input type="text" onChange={props.change} value={props.name}></input>
    </StyledDiv>
  );
};

export default person;
