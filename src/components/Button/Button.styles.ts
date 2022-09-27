import { css } from '@stitches/core';

export const baseSizes = {
  sm: {
    // -30%
    fontSize: '0.7000rem',
    padding: '0 12px 0 12px',
    height: '28px',
  },
  md: {
    fontSize: '0.875rem',
    padding: '0 16px 0 16px',
    height: '36px',
  },
  lg: {
    // +30%
    fontSize: '1.1375rem',
    padding: '0 20px 0 20px',
    height: '46px',
  },
  xl: {
    // +50%
    fontSize: '1.3125rem',
    padding: '0 24px 0 24px',
    height: '54px',
  },
};

const baseButton = {
  cursor: 'pointer',
  lineHeight: '2.25rem',
  fontWeight: 500,
  letterSpacing: '0.0892857143em',
  textDecoration: 'none',
  textTransform: 'uppercase',
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
    size: baseSizes,
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

  defaultVariants: { isDark: false, size: 'md' },
});

export const ButtonOutline = css({
  ...baseButton,

  backgroundColor: 'transparent',

  variants: {
    size: baseSizes,
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
    size: baseSizes,
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
    size: baseSizes,
    isDark: {
      true: {
        color: 'rgb(var(--dark-secondary))',
        background: 'transparent',
        boxShadow: '0.4rem 0.4rem 0.6rem #00000040',

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
