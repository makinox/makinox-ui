import styled from 'styled-components';
import { TopBarStyle } from './TopBar.types';

export const TopBarNav = styled.nav<TopBarStyle>`
  box-shadow: 3px 3px 10px 3px rgb(0 0 0 / 3%);

  ${(props) => {
    if (props.theme?.isDark || props.isDark) {
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

  & > div {
    padding: 10px 5px;
  }
`;
