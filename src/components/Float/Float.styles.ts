import styled, { css } from 'styled-components';
import { FloatStyle } from './Float.types';

const FloatBase = css<FloatStyle>`
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
  transition: all 0.3s ease 0s;

  ${(props) => {
    if (props.theme?.isDark || props.isDark) {
      return `
        background-color: rgb(var(--dark-primary));
        color: rgb(var(--dark-onPrimary));
      `;
    } else {
      return `
        background-color: rgb(var(--light-primary));
        color: rgb(var(--light-onPrimary));
      `;
    }
  }}

  &:focus,
  &:active {
    outline: none;
  }
  &:active {
    transform: scale(1.01);
  }
  &:hover {
    ${(props) => {
      if (props.theme?.isDark || props.isDark) {
        return `
        background-color: rgba(var(--dark-primary), 0.8);
      `;
      } else {
        return `
        background-color: rgba(var(--light-primary), 0.8);
      `;
      }
    }}
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
