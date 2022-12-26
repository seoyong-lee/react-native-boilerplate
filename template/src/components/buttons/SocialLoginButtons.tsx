import React, { Fragment, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import SocailLoginButton from "./SocailLoginButton";

// import { API, Auth } from "aws-amplify";
// import {
//   GoogleSignin,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";
// import { KakaoOAuthToken, login } from "@react-native-seoul/kakao-login";
// import axios from "axios";
// import { useRecoilState } from "recoil";

import kakaoLogo from "@/assets/kakao.png";
import GoogleLogo from "@/assets/google.png";

// import { userState } from "@/recoil/auth";
// import CustomLoginButton from "./CustomLoginButton";
// import { IAuthData, setSession } from "./utils";
// import { listUsers } from "@/graphql/queries";
// import { createUser } from "@/graphql/mutations";

const SocialLoginButtons = () => {
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState<boolean>(false);
  // const [user, setUser] = useRecoilState(userState);

  // const getUserData = async (email: string) => {
  //   // 유저 조회
  //   const apiData: any = await API.graphql({
  //     query: listUsers,
  //     variables: { filter: { email: { contains: email } } },
  //   });
  //   // 가입된 이메일인 경우 유저 정보 저장
  //   if (apiData.data.listUsers.items.length > 0) {
  //     setUser(apiData.data.listUsers.items[0]);
  //   } else {
  //     // 미가입 이메일 유저 생성
  //     await API.graphql({
  //       query: createUser,
  //       variables: {
  //         input: {
  //           username: email,
  //           email,
  //         },
  //       },
  //     });

  //     const apiData: any = await API.graphql({
  //       query: listUsers,
  //       variables: { filter: { email: { contains: email } } },
  //     });
  //     setUser(apiData.data.listUsers.items[0]);
  //   }
  // };

  // const onSignInKakao = async () => {
  //   if (loading) {
  //     return;
  //   }

  //   setLoading(true);
  //   await login().then(async (token: KakaoOAuthToken) => {
  //     if (token) {
  //       const url = `https://0an9esk6m6.execute-api.ap-northeast-2.amazonaws.com/auth/kakao`;
  //       await axios
  //         .post(url, {
  //           access_token: token.accessToken,
  //         })
  //         .then(async resp => {
  //           const data: IAuthData = resp.data;

  //           if (data.email) {
  //             getUserData(data.email);
  //           }

  //           setSession(data).then(() => {
  //             navigation.navigate("Home");
  //           });
  //         });
  //     }
  //   });
  //   setLoading(false);
  // };

  // const onSignInGoogle = async () => {
  //   if (loading) {
  //     return;
  //   }

  //   setLoading(true);
  //   GoogleSignin.hasPlayServices().then(() => {
  //     GoogleSignin.signIn()
  //       .then(userInfo => {
  //         if (userInfo.idToken) {
  //           Auth.federatedSignIn(
  //             "google",
  //             {
  //               token: userInfo.idToken,
  //               expires_at: 60 * 1000 + new Date().getTime(),
  //             },
  //             {
  //               name: userInfo.user.name || "guest",
  //               email: userInfo.user.email,
  //             },
  //           )
  //             .then(() => {
  //               getUserData(userInfo.user.email).then(() => {
  //                 navigation.navigate("Home");
  //               });
  //             })
  //             .catch(e => {
  //               console.log("federated login error", e);
  //             });
  //         }
  //       })
  //       .catch(error => {
  //         console.log("userInfo error", error);
  //         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //           console.log("SIGN_IN_CANCELLED", error.code);
  //         } else if (error.code === statusCodes.IN_PROGRESS) {
  //           console.log("IN_PROGRESS", error.code);
  //         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //           console.log("PLAY_SERVICES_NOT_AVAILABLE", error.code);
  //         } else {
  //           console.log("other error", error.code);
  //         }
  //       });
  //   });
  //   setLoading(false);
  // };

  return (
    <Fragment>
      <SocailLoginButton
        text="Continue with Kakao"
        logo={kakaoLogo}
        onPress={() => null}
        bgColor="#FEE500"
        fgColor="#262300"
      />
      <SocailLoginButton
        text="Continue with Google"
        logo={GoogleLogo}
        border={true}
        onPress={() => null}
        fgColor="#262300"
      />
    </Fragment>
  );
};

export default SocialLoginButtons;
