import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { useForm } from "react-hook-form";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import Logo from "@/assets/logo.png";

import SocialLoginButtons from "@/components/buttons/SocialLoginButtons";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/buttons/CustomButton";
import { COLOR } from "@/constants/colors";

const SignInScreen = () => {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPressed = async (data: any) => {
    if (loading) {
      return;
    }
    setLoading(true);
    // try {
    //   console.log(response);
    navigation.navigate("Home");
    // } catch (e: any) {
    //   Alert.alert("error: ", e.message);
    // }
    setLoading(false);
  };

  const onForgotPasswordPressed = () => {
    // navigation.navigate("ForgotPassword");
  };

  const onSignUpPress = () => {
    // navigation.navigate("SignUp");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ paddingTop: insets.top, backgroundColor: COLOR.WHITE }}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <CustomInput
          name="username"
          placeholder="Email"
          control={control}
          rules={{ required: "Please enter your email address." }}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: "Please enter your password.",
            minLength: {
              value: 3,
              message: "Password must contain at least 3 characters.",
            },
          }}
        />
        <CustomButton
          text={loading ? "Loading..." : "Login"}
          onPress={handleSubmit(onSignInPressed)}
        />
        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <SocialLoginButtons />
        <CustomButton
          text="No account? Create one!"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
