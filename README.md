# react-native-linear-gradient-web

Ultra-fast linear gradient implementation for [React Native Web](https://www.npmjs.com/package/react-native-web).


## Installation

Install the package using either npm or yarn:

```bash
yarn add react-native-linear-gradient-web
```

Update your `webpack.config.js` to include the following alias:

```diff
module.exports = {
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      // ...  
+      'react-native-linear-gradient': 'react-native-linear-gradient-web',
    },
  },
};
```
