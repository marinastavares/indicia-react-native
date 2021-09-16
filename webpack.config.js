/* eslint-disable @typescript-eslint/no-var-requires */
const createExpoWebpackConfigAsync = require('@expo/webpack-config')
const path = require('path')

const aliases = {
  _assets: path.resolve(__dirname, '..', 'src/assets/'),
  _components: path.resolve(__dirname, '..', 'src/components/'),
  _constants: path.resolve(__dirname, '..', 'src/constants/'),
  _hooks: path.resolve(__dirname, '..', 'src/hooks/'),
  _navigation: path.resolve(__dirname, '..', 'src/navigation/'),
  _screens: path.resolve(__dirname, '..', 'src/screens/'),
}

const babelLoaderRules = {
  test: /\.tsx?$/,
  loader: 'babel-loader',
  options: {
    presets: ['babel-preset-expo'],
  },
}

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv)

  config.resolve.alias = {
    ...config.resolve.alias,
    ...aliases,
  }

  config.module.rules = [...config.module.rules, babelLoaderRules]

  // Other configuration options

  return config
}
