import css from 'rollup-plugin-scss';

const config = {
  input: './src/layout/colors.css',
  output: {
    file: 'dist/colors',
    format: 'es',
  },
  plugins: [css({ outputStyle: 'compressed' })],
};

export default config;
