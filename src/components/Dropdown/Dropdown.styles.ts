import { css } from '@stitches/core';

export const DropdownHiden = css({
  boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
  flexDirection: 'column',
  position: 'absolute',
  borderRadius: '3px',
  display: 'none',

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
});

export const DropdownContainer = css({
  position: 'relative',

  [`&:hover > .${DropdownHiden}`]: {
    display: 'flex !important',
  },

  variants: {
    isDark: {
      true: {
        color: 'rgb(var(--dark-onBackground))',
      },
      false: {
        color: 'rgb(var(--light-onBackground))',
      },
    },
  },

  defaultVariants: { isDark: false },
});

export const DropdownItem = css({
  display: 'inline-block',
  cursor: 'pointer',
});
