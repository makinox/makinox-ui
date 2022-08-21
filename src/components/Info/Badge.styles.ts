import { css } from '@stitches/core';

const baseProps = {
  justifyContent: 'center',
  boxSizing: 'border-box',
  alignItems: 'center',
  borderRadius: '50%',
  textAlign: 'center',
  display: 'flex',
  height: '20px',
  width: '20px',
};

export const Badge = css({
  ...baseProps,

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
