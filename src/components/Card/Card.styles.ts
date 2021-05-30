import styled, { css } from 'styled-components';
import { lightBackground } from '../../layout/colors';
import { CardStyle } from './Card.types';

const CardBase = (props: CardStyle) => css`
  max-width: ${props.maxWidth};
  & > div {
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
  }
  & > div:last-of-type {
    padding-bottom: 16px;
  }
  & > div .subtitle1,
  & > div .body2 {
    opacity: 0.6;
  }

  & .card-bottom > button {
    padding: 0 8px;
  }

  & .card-bottom > button:first-of-type {
    margin-right: 4px;
  }

  & .card-bottom {
    padding-left: 4px;
    padding-right: 4px;
  }

  & .card-media {
    background: url('${props.media}');
    padding: initial;
    padding-top: 56%;
    position: relative;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
`;

export const CardElevated = styled.article<CardStyle>`
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

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

  ${(props) => CardBase({ media: props.media, maxWidth: props.maxWidth })}
`;

export const CardOutlined = styled.article<CardStyle>`
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 0px 0px, rgb(0 0 0 / 14%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 0px 0px 0px;
  background-color: ${lightBackground.value};
  border-width: 1px;
  border-style: solid;

  ${(props) => {
    if (props.theme?.isDark || props.isDark) {
      return `
        background-color: rgb(var(--dark-background));
        color: rgb(var(--dark-onBackground));
        border-color: #383838;
      `;
    } else {
      return `
        background-color: rgb(var(--light-background));
        color: rgb(var(--light-onBackground));
        border-color: #e0e0e0;
      `;
    }
  }}

  ${(props) => CardBase({ media: props.media, maxWidth: props.maxWidth })}
`;
