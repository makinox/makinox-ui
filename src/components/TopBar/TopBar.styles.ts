import { css } from '@stitches/core';

export default css({
  boxShadow: '3px 3px 10px 3px rgb(0 0 0 / 3%)',

  variants: {
    isDark: {
      true: {
        backgroundColor: 'rgb(var(--dark-background))',
        color: 'rgb(var(--dark-onBackground))',
      },
      false: {
        backgroundColor: 'rgb(var(--light-background))',
        color: 'rgb(var(--light-onBackground))',
      },
    },
  },

  defaultVariants: { isDark: false },

  [`& > section`]: {
    padding: '10px 5px',
  },
});
