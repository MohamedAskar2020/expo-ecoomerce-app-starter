import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, router, Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import InputField from "./components/InputField";
import { Ionicons } from "@expo/vector-icons";
import SocialLoginButton from "./components/SocialLoginButton";

type Props = {};

const SignInScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Sign In",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close" size={24} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Login To Your Account</Text>
        <InputField
          placeholder="Email Address"
          placeholderTextColor={Colors.gray}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <InputField
          placeholder="Password"
          placeholderTextColor={Colors.gray}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => {
            router.dismissAll();
            router.push("/(tabs)");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.lognText}>
          Don't have an account?{" "}
          <Link href={"/signup"} asChild>
            <TouchableOpacity>
              <Text style={styles.loginTxtSpan}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </Text>
        <View style={styles.divider} />
        <SocialLoginButton emailHref="/signin" />
      </View>
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 50,
    color: Colors.black,
    letterSpacing: 1.2,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 5,
    alignSelf: "stretch",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  lognText: {
    fontSize: 16,
    color: Colors.black,
    marginBottom: 30,
    lineHeight: 24,
  },
  loginTxtSpan: {
    color: Colors.primary,
    fontWeight: "600",
    marginTop: 17,
    paddingBottom: 15,
  },
  divider: {
    backgroundColor: Colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    width: "30%",
    marginBottom: 30,
  },
});
