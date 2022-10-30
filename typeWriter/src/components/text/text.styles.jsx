import styled from "styled-components";

export const Word = styled.span`
  color: ${props => props.color};
`;

export const Heading = styled.div`
  text-align: center;

  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 160%;
  margin-bottom: 20px;
  /* or 51px */

  color: #000000;
`;

export const Text = styled.div`
  width: 50%;
  min-width: 500px;
  text-align: center;
  margin: auto;
  margin-top: 10px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */

  color: #000000;
`;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  margin: auto;
  display: block;
  margin-top: 40px;

  width: 70%;
  min-width: 600px;
  height: 259px;
  resize: none;
  font-size: 18px;
  font-family: inherit;

  background: #ffffff;
  border: 5px solid #000000;
`;

export const Button = styled.div`
  /* Auto layout */

  display: block;
  margin: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 32px;
  gap: 10px;
  text-align: center;
  margin-top: 50px;
  cursor: pointer;

  width: 143px;
  height: 22px;

  background: #149bfc;
`;
