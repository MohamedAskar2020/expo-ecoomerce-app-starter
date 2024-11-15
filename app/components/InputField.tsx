import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { ComponentProps } from "react";
import { Colors } from "@/constants/Colors";

type Props = {};

const InputField = (props: ComponentProps<typeof TextInput>) => {
  return <TextInput style={styles.inputField} {...props} />;
};

export default InputField;

const styles = StyleSheet.create({
  inputField: {
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 20,
    color: Colors.black,
    fontSize: 16,
  },
});
