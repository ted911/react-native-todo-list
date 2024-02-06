module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          imgs: './src/assets/imgs',
          hooks: './src/business/hooks',
          components: './src/components',
          navigation: './src/navigation',
          screens: './src/screens',
          queries: './src/store/queries',
          stores: './src/store/stores',
          apis: './src/util/apis',
          utils: './src/util/utils',
        },
      },
    ],
  ],
};
