import styled, { css } from 'styled-components';
import { lightOnPrimary, lightPrimary } from '../../layout/colors';

const FloatBase = css`
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0px;
  border-radius: 50%;
  border: none;
  fill: currentcolor;
  cursor: pointer;
  user-select: none;
  appearance: none;
  overflow: hidden;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s, opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  background-color: ${lightPrimary.value};
  color: ${lightOnPrimary.value};

  &:focus,
  &:active {
    outline: none;
  }
  &:hover {
    background-color: ${lightPrimary.value + 'E6'};
  }
`;

export const FloatDefault = styled.button`
  ${FloatBase}

  width: 56px;
  height: 56px;
`;

export const FloatMini = styled.button`
  ${FloatBase}

  width: 40px;
  height: 40px;
`;
