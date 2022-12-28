# React Native Basic Navigation boilerplate

A React Native template for building basic navigation using TypeScript

<div align="center">
    <img src="docs/example.png" alt="example" width="100%">
</div>

## Features

- React Native template with TypeScript
- Google / Kakao Sign-in
- Basic navigation with Vector Icons
- Import alias

## Quick start

To Create a new project using the boilerplate :

```
npx react-native init MyApp --template rn-basic-boilerplate
```

Then follow the [Google Sign-in guide](docs/google-signin-guide.md) and [Kakao Sign-in guide](docs/kakao-signin-guide.md)

Run the project by running:

- `yarn start` to start the metro
- `yarn <platform>` to run the platform application

## Stack

- @react-navigation/native
  - @react-navigation/native-stack
  - @react-navigation/bottom-tabs
  - react-native-safe-area-context
  - react-native-screens
- @react-native-google-signin/google-signin
- @react-native-seoul/kakao-login
- react-hook-form
- react-native-vector-icons
- babel-plugin-module-resolver
  - eslint-import-resolver-babel-module

## License

This project is released under the [MIT License](LICENSE).
