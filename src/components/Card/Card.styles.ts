import { css } from '@stitches/core';

export default css({
  maxWidth: '330px',

  '& > div': {
    paddingTop: '16px',
    paddingLeft: '16px',
    paddingRight: '16px',
  },
  '& > div:last-of-type': {
    paddingBottom: '16px',
  },
  '& > div .subtitle1, & > div .body2': {
    opacity: 0.6,
  },
  '& .card-bottom > button': {
    padding: '0 8px',
  },
  '& .card-bottom > button:first-of-type': {
    marginRight: '8px',
  },
  '& .card-bottom': {
    paddingLeft: '4px',
    paddingRight: '4px',
  },
  '& .card-media': {
    padding: 'initial',
    position: 'relative',
    boxSizing: 'border-box',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
    width: '100%',
  },

  variants: {
    type: {
      elevated: {
        borderRadius: '4px',
        boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        border: 'none !important',
        borderColor: 'none !important',
      },
      outlined: {
        borderRadius: '4px',
        boxShadow: 'rgb(0 0 0 / 20%) 0px 0px 0px 0px, rgb(0 0 0 / 14%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 0px 0px 0px',
        borderWidth: '1px',
        borderStyle: 'solid',
      },
    },
    isDark: {
      true: {
        backgroundColor: 'rgb(var(--dark-background))',
        color: 'rgb(var(--dark-onBackground))',
        borderColor: '#383838',
      },
      false: {
        backgroundColor: 'rgb(var(--light-background))',
        color: 'rgb(var(--light-onBackground))',
        borderColor: '#e0e0e0',
      },
    },
  },

  defaultVariants: {
    isDark: false,
    type: 'elevated',
  },
});
