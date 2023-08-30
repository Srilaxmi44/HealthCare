// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     // ... other configs, if any
//     [
//       'module-resolver',
//       'module:react-native-dotenv',
//       {
//         envName: 'APP_ENV',
//         moduleName: '@env',
//         path: '.env',
//       },
//       {
//         extensions: [
//           '.ios.js',
//           '.android.js',
//           '.ios.jsx',
//           '.android.jsx',
//           '.js',
//           '.jsx',
//           '.json',
//           '.ts',
//           '.tsx',
//         ],
//         root: ['.'],
//         alias: {
//           // src: './src',
//           // '@api': './src/api',
//           // '@assets': './src/assets',
//           // '@components': './components',
//           // '@styles': './styles',
//           // '@theme': './src/theme',
//           // '@utils': './src/utils',
//         },
//       },
//     ],
//   ],
// };

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};
