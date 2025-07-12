Ultra-fast linear gradient implementation for [React Native Web](https://www.npmjs.com/package/react-native-web).

This package is exceptionally fast because it’s fully stateless and doesn’t rely on setState during layout events.

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


## Usage

See examples in the original library: [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)

## Comparison

<table>
<thead>
<tr>
<th>🤔 react-native-web-linear-gradient</th>
<th>🚀 react-native-linear-gradient-web</th>
</tr>
</thead>
<tbody>
<tr>
<td>

https://github.com/user-attachments/assets/c0a6aaaf-aa93-42f6-bc98-3e64711a3ecd

</td>
<td>

https://github.com/user-attachments/assets/543389b2-6670-4954-8f72-e3d8358b072e

</td>
</tr>
</tbody>
</table>


## Known Issues

- This package is not compatible with the Tizen runtime (SVG gradient as a background image won't work).
