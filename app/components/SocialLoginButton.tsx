import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { Href, Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import Animated, { FadeInDown } from "react-native-reanimated";
import Google from "@/assets/images/google-logo.svg";

type Props = {
  emailHref: Href;
};

const SocialLoginButton = (props: Props) => {
  const { emailHref } = props;
  return (
    <View style={styles.socialLoginWrapper}>
      <Animated.View entering={FadeInDown.delay(300).duration(500)}>
        <Link href={emailHref} asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="mail-outline" size={22} color={Colors.black} />
            <Text style={styles.buttonText}>Continue with Email</Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(700).duration(500)}>
        {/* <Link href={"/signup"} asChild> */}
        <TouchableOpacity style={styles.button}>
          <Google width={20} height={20} />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
        {/* </Link> */}
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(1100).duration(500)}>
        {/* <Link href={"/signup"} asChild> */}
        <TouchableOpacity style={styles.button}>
          <Ionicons name="logo-apple" size={22} color={Colors.black} />
          <Text style={styles.buttonText}>Continue with Apple</Text>
        </TouchableOpacity>
        {/* </Link> */}
      </Animated.View>
    </View>
  );
};

export default SocialLoginButton;

const styles = StyleSheet.create({
  socialLoginWrapper: {
    alignSelf: "stretch",
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    // marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginBottom: 15,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black,
  },
});
