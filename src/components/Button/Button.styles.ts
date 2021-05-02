import styled, { css } from 'styled-components';

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

  &:focus,
  &:active {
    outline: none;
  }
  &:active {
    transform: scale(1.01);
  }
`;

export const ButtonContained = styled.button`
  ${buttonBase}

  background-color: rgb(var(--light-primary));
  color: rgb(var(--light-onPrimary));

  &:hover {
    background-color: ${'rgba(var(--light-primary), 0.8)'};
  }
`;

export const ButtonOutline = styled.button`
  ${buttonBase}

  background-color: transparent;
  border: 1px solid rgb(var(--light-primary));
  color: rgb(var(--light-primary));

  &:hover {
    background-color: ${'rgba(var(--light-primary), 0.08)'};
  }
`;

export const ButtonText = styled.button`
  ${buttonBase}

  background-color: transparent;
  color: rgb(var(--light-primary));

  &:hover {
    background-color: ${'rgba(var(--light-primary), 0.08)'};
  }
`;
