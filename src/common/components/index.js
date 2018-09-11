import styled, { css } from "styled-components";
import Select from "./Select";
import CheckBox from "./CheckBox";

export const Text = styled.span`
  ${props =>
    props.bold &&
    css`
      font-weight: bold;
    `};

  ${props =>
    props.size === "small" &&
    css`
      font-size: 12px;
    `} ${props =>
    props.size === "medium" &&
    css`
      font-size: 18px;
    `};

  ${props =>
    props.color === "error" &&
    css`
      color: red;
    `};
`;

export const Label = styled.label`
  ${props =>
    props.size === "small" &&
    css`
      font-size: 12px;
    `} ${props =>
    props.size === "medium" &&
    css`
      font-size: 18px;
    `};

  ${props =>
    props.bold &&
    css`
      font-weight: bold;
    `};

  ${props =>
    props.color === "error" &&
    css`
      color: red;
    `};
`;

export const Separator = styled.hr`
  border: none;
  height: 2px;
  background: #dedede;
`;

export const TextField = styled.input.attrs({ type: "text" })`
  height: 48px;
  border: 1px solid #c5c5c5;
  padding: 0 20px;

  &::placeholder {
    font-size: 12px;
  }

  ${props =>
    props.color === "error" &&
    css`
      border-color: red;
    `};
`;

export const Button = styled.button`
  height: 48px;
  background: white;
  color: black;
  border: 2px solid transparent;
  font-weight: bold;
  cursor: pointer;

  ${props =>
    props.selected &&
    css`
      border-color: #ececec;
    `} ${props =>
    props.highlighted &&
    css`
      background: black;
      color: white;
    `};
`;

export const Circle = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  border-radius: 100%;
  background: #d8d8d8;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img``;

export { Select, CheckBox };
