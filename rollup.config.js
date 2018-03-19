import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'lib/main.js',
  output: {
    name: 'AgGridReact',
    file: 'lib/ag-grid-react.min.js',
    format: 'umd',
    globals: {
      'react-dom-factories': 'ReactDOMFactories',
      'react': 'React',
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes',
      'ag-grid': 'agGrid'
    }
  },
  plugins: [commonjs(), uglify()]
}
