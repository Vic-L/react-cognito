import baseConfig, { options } from './base.config';

export default {
  ...baseConfig,

  entry: {
    'bundle': './examples/src/index.jsx',
  },

  output: {
    path: './examples/htdocs/dist',
    filename: options.optimizeMinimize ? '[name].min.js' : '[name].js',
  },

  resolve: {
    modulesDirectories: ['dist'],
  },

  externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      redux: 'Redux',
      'react-redux': 'ReactRedux',
      'react-router': 'ReactRouter',
      'aws-cognito-sdk': 'AWSCognito',
      'amazon-cognito-identity-js': 'AmazonCognitoIdentity',
      
  },
};
