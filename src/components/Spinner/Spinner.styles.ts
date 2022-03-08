import { css, keyframes } from '@stitches/core';

const loader = keyframes({
  '0%': {
    transform: 'scale(1)',
    opacity: 0,
  },

  '50%': {
    opacity: 1,
  },

  '100%': {
    transform: 'scale(0)',
    opacity: 0,
  },
});

export default css({
  border: '0 solid transparent',
  borderRadius: '50%',
  width: '150px',
  height: '150px',

  '&::before, &::after': {
    content: '',
    border: '7px solid #ccc',
    borderRadius: '50%',
    width: 'inherit',
    height: 'inherit',
    position: 'absolute',
    animation: `${loader} 2s linear infinite`,
    opacity: 0,
  },

  '&::before': {
    animationDelay: '1s',
  },
});
