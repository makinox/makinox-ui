import { css } from '@stitches/core';

const baseButton = {
  cursor: 'pointer',
  fontSize: '0.875rem',
  lineHeight: '2.25rem',
  fontWeight: 500,
  letterSpacing: '0.0892857143em',
  textDecoration: 'none',
  textTransform: 'uppercase',
  padding: '0 16px 0 16px',
  display: 'inline-flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  minWidth: '64px',
  border: 'none',
  outline: 'none',
  // lineHeight: 'inherit',
  userSelect: 'none',
  overflow: 'visible',
  verticalAlign: 'middle',
  borderRadius: '4px',
  height: '36px',
  transition: 'all 0.3s ease 0s',

  '&:focus, &:active': {
    outline: 'none',
  },
  '&:active': {
    transform: 'scale(1.01)',
  },
};

export const ButtonContained = css({
  ...baseButton,

  variants: {
    isDark: {
      true: {
        backgroundColor: 'rgb(var(--dark-primary))',
        color: 'rgb(var(--dark-onPrimary))',
        '&:hover': {
          backgroundColor: 'rgba(var(--dark-primary), 0.8)',
        },
      },
      false: {
        backgroundColor: 'rgb(var(--light-primary))',
        color: 'rgb(var(--light-onPrimary))',
        '&:hover': {
          backgroundColor: 'rgba(var(--light-primary), 0.8)',
        },
      },
    },
  },

  defaultVariants: { isDark: false },
});

export const ButtonOutline = css({
  ...baseButton,

  backgroundColor: 'transparent',

  variants: {
    isDark: {
      true: {
        border: '1px solid rgb(var(--dark-primary))',
        color: 'rgb(var(--dark-primary))',
        '&:hover': {
          backgroundColor: 'rgba(var(--dark-primary), 0.08)',
        },
      },
      false: {
        border: '1px solid rgb(var(--light-primary))',
        color: 'rgb(var(--light-primary))',
        '&:hover': {
          backgroundColor: 'rgba(var(--light-primary), 0.08)',
        },
      },
    },
  },

  defaultVariants: { isDark: false },
});

export const ButtonText = css({
  ...baseButton,

  backgroundColor: 'transparent',

  variants: {
    isDark: {
      true: {
        color: 'rgb(var(--dark-primary))',
        '&:hover': {
          backgroundColor: 'rgba(var(--dark-primary), 0.08)',
        },
      },
      false: {
        color: 'rgb(var(--light-primary))',
        '&:hover': {
          backgroundColor: 'rgba(var(--light-primary), 0.08)',
        },
      },
    },
  },

  defaultVariants: { isDark: false },
});
