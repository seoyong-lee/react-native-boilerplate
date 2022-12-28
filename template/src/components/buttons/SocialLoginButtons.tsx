import React, { Fragment } from "react";

import { useNavigation } from "@react-navigation/native";
import SocailLoginButton from "./SocailLoginButton";

import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import {
  KakaoOAuthToken,
  login as kakaoSignin,
} from "@react-native-seoul/kakao-login";

import kakaoLogo from "@/assets/kakao.png";
import GoogleLogo from "@/assets/google.png";

const SocialLoginButtons = () => {
  const navigation = useNavigation<any>();

  const onSignInKakao = async () => {
    try {
      const kakaoResponse: KakaoOAuthToken = await kakaoSignin();
      if (kakaoResponse) {
        console.log("Kakao Response: ", kakaoResponse);
        // navigation.navigate("Home");
      }
    } catch (error: any) {
      console.log("error", error);
    }
  };

  const onSignInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("Google idToken: ", userInfo.idToken);
      // navigation.navigate("Home");
    } catch (error: any) {
      console.log("userInfo error", error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("SIGN_IN_CANCELLED", error.code);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("IN_PROGRESS", error.code);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("PLAY_SERVICES_NOT_AVAILABLE", error.code);
      } else {
        console.log("other error", error.code);
      }
    }
  };

  return (
    <Fragment>
      <SocailLoginButton
        text="Continue with Kakao"
        logo={kakaoLogo}
        onPress={onSignInKakao}
        bgColor="#FEE500"
        fgColor="#262300"
      />
      <SocailLoginButton
        text="Continue with Google"
        logo={GoogleLogo}
        border={true}
        onPress={onSignInGoogle}
        fgColor="#262300"
      />
    </Fragment>
  );
};

export default SocialLoginButtons;
