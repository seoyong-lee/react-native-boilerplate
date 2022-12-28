/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Navigation from "./src/navigation";
import config from "./src/config";

GoogleSignin.configure({
  offlineAccess: true,
  forceCodeForRefreshToken: true,
  webClientId: config.WEB_CLIENT_ID,
  iosClientId: config.IOS_CLIENT_ID,
});

const App = () => {
  return <Navigation />;
};

export default App;
