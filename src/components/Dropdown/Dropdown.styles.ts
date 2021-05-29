import styled from 'styled-components';

export const DropdownHiden = styled.div`
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  flex-direction: column;
  position: absolute;
  border-radius: 3px;
  display: none;

  ${(props) => {
    if (props.theme?.isDark) {
      return `
        background-color: rgb(var(--dark-background));
        color: rgb(var(--dark-onBackground));
      `;
    } else {
      return `
        background-color: rgb(var(--light-background));
        color: rgb(var(--light-onBackground));
      `;
    }
  }}
`;

export const DropdownContainer = styled.div`
  position: relative;

  &:hover > ${DropdownHiden} {
    display: flex !important;
  }

  ${(props) => {
    if (props.theme?.isDark) {
      return `
        color: rgb(var(--dark-onBackground));
      `;
    } else {
      return `
        color: rgb(var(--light-onBackground));
      `;
    }
  }}
`;

export const DropdownItem = styled.span`
  display: inline-block;
  cursor: pointer;
`;
