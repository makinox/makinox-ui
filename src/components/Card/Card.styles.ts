import styled, { css } from 'styled-components';
import { lightBackground } from '../../layout/colors';

const CardBase = css`
  & > div {
    padding-left: 16px;
    padding-right: 16px;
  }
  & > div:first-of-type {
    padding-top: 16px;
  }
  & > div:last-of-type {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  & > div .subtitle1,
  & > div .body2 {
    opacity: 0.6;
  }
`;

export const CardElevated = styled.article`
  border-radius: 4px;
  background-color: ${lightBackground.value};
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  ${CardBase}
`;

export const CardOutlined = styled.article`
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 0px 0px, rgb(0 0 0 / 14%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 0px 0px 0px;
  background-color: ${lightBackground.value};
  border-width: 1px;
  border-style: solid;
  border-color: #e0e0e0;

  ${CardBase}
`;
