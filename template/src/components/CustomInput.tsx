import React from "react";
import {View, Text, TextInput, StyleSheet, StyleProp} from "react-native";
import {Controller} from "react-hook-form";

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  style,
  hideError,
}: {
  control: any;
  name: string;
  rules: any;
  placeholder: string;
  secureTextEntry?: any;
  style?: StyleProp<any>;
  hideError?: boolean;
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? "red" : "#e8e8e8"},
              style,
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
              autoCapitalize={"none"}
            />
          </View>
          {error && !hideError && (
            <Text style={{color: "red", alignSelf: "stretch"}}>
              {error.message || "Error"}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",

    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 12,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    height: 50,
  },
});

export default CustomInput;
