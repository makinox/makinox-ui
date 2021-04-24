import styled, { css } from 'styled-components';
import { lightOnPrimary, lightPrimary } from '../../layout/colors';

const buttonBase = css`
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 2.25rem;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 16px 0 16px;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  user-select: none;
  overflow: visible;
  vertical-align: middle;
  border-radius: 4px;
  height: 36px;
  transition: all 0.3s ease 0s;

  &:active {
    outline: none;
    transform: scale(1.01);
  }
`;

export const ButtonContained = styled.button`
  ${buttonBase}

  background-color: ${lightPrimary.value};
  color: ${lightOnPrimary.value};

  &:hover {
    background-color: ${lightPrimary.value + 'E6'};
  }
`;

export const ButtonOutline = styled.button`
  ${buttonBase}

  background-color: transparent;
  border: 1px solid ${lightPrimary.value};
  color: ${lightPrimary.value};

  &:hover {
    background-color: ${lightPrimary.value + '1A'};
  }
`;

export const ButtonText = styled.button`
  ${buttonBase}

  background-color: transparent;
  color: ${lightPrimary.value};

  &:hover {
    background-color: ${lightPrimary.value + '1A'};
  }
`;
