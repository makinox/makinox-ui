import styled from 'styled-components';

export const DropdownHiden = styled.div`
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  background-color: rgba(var(--light-background));
  flex-direction: column;
  position: absolute;
  border-radius: 3px;
  display: none;
`;

export const DropdownContainer = styled.div`
  position: relative;
  &:hover > ${DropdownHiden} {
    display: flex !important;
  }
`;

export const DropdownItem = styled.span`
  display: inline-block;
  cursor: pointer;
`;
