module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@routes': './src/routes',
            '@utils': './src/utils',
            '@services': './src/services',
            '@assets': './src/assets',
            '@api': './src/api',
            '@hooks': './src/hooks',
            '@constants': './src/constants',
            '@styles': './src/styles',
            '@types': './src/@types',
          },
        },
      ],
    ],
  }
}
