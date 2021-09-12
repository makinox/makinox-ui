import { css } from '@stitches/core';

export default css({
  boxShadow: 'rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px',
  display: 'inline-flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  padding: '0px',
  borderRadius: '50%',
  border: 'none',
  fill: 'currentcolor',
  cursor: 'pointer',
  userSelect: 'none',
  appearance: 'none',
  overflow: 'hidden',
  transition: 'all 0.3s ease 0s',

  '&:focus, &:active': {
    outline: 'none',
  },
  '&:active': {
    transform: 'scale(1.01)',
  },

  variants: {
    isDark: {
      true: {
        backgroundColor: 'rgb(var(--dark-primary))',
        color: 'rgb(var(--dark-onPrimary))',
      },
      false: {
        backgroundColor: 'rgb(var(--light-primary))',
        color: 'rgb(var(--light-onPrimary))',
      },
    },
    type: {
      normal: {
        width: '56px',
        height: '56px',
      },
      mini: {
        width: '40px                                                         ',
        height: '40px                                                         ',
      },
    },
  },

  defaultVariants: {
    isDark: false,
    type: 'normal',
  },
});
