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
        backgroundColor: 'rgb(var(--dark-secondary))',
        color: 'rgb(var(--dark-onsecondary))',
        '&:hover': {
          backgroundColor: 'rgba(var(--dark-secondary), 0.8)',
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
        border: '1px solid rgb(var(--dark-secondary))',
        color: 'rgb(var(--dark-secondary))',
        '&:hover': {
          backgroundColor: 'rgba(var(--dark-secondary), 0.08)',
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
        color: 'rgb(var(--dark-secondary))',
        '&:hover': {
          backgroundColor: 'rgba(var(--dark-secondary), 0.08)',
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

export const ButtonNeumorphic = css({
  ...baseButton,

  variants: {
    isDark: {
      true: {
        color: 'rgb(var(--dark-secondary))',
        background: 'transparent',
        boxShadow: '6px 6px 12px #1e1e1e, -6px -6px 12px rgb(var(--dark-background))',

        '&:hover': {
          backgroundColor: 'rgba(var(--dark-secondary), 0.08)',
        },

        '&:active': {
          color: 'rgba(var(--dark-secondary), 0.5)',
          backgroundColor: 'rgba(var(--dark-secondary), 0.05)',
          boxShadow: 'inset 4px 4px 12px #1e1e1e, inset -4px -4px 12px rgb(var(--dark-background))',
        },
      },
      false: {
        color: 'rgb(var(--light-primary))',
        background: 'transparent',
        boxShadow: '6px 6px 12px #c5c5c5, -6px -6px 12px rgb(var(--light-background))',

        '&:hover': {
          backgroundColor: 'rgba(var(--light-primary), 0.08)',
        },
        '&:active': {
          color: 'rgba(var(--light-primary), 0.5)',
          backgroundColor: 'rgba(var(--light-primary), 0.05)',
          boxShadow: 'inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px rgb(var(--light-background))',
        },
      },
    },
  },

  defaultVariants: { isDark: false },
});
